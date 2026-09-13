(function () {
    const CHAVE_CARRINHO = "naySemiJoiasCarrinho";
    const NUMERO_WHATSAPP = "5511999999999"; // Trocar pelo WhatsApp real da loja.
    let carrinho = [];

    try {
        carrinho = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || "[]");
        if (!Array.isArray(carrinho)) carrinho = [];
    } catch (e) {
        carrinho = [];
    }

    function salvar() {
        localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
    }

    function quantidadeTotal() {
        return carrinho.reduce((total, item) => total + Number(item.quantidade || 0), 0);
    }

    function totalCarrinho() {
        return carrinho.reduce((total, item) => {
            return total + (Number(item.preco) * Number(item.quantidade || 0));
        }, 0);
    }

    function formatarPreco(valor) {
        return Number(valor || 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function atualizarContador() {
        const contador = document.getElementById("contador-carrinho");
        if (contador) contador.textContent = quantidadeTotal();
    }

    function renderizarCarrinho() {
        const lista = document.getElementById("itens-carrinho");
        const vazio = document.getElementById("carrinho-vazio");
        const total = document.getElementById("total-carrinho");

        if (!lista || !vazio || !total) return;

        lista.innerHTML = "";
        vazio.style.display = carrinho.length ? "none" : "block";

        carrinho.forEach(function (item) {
            const div = document.createElement("div");
            div.className = "item-carrinho";

            const img = document.createElement("img");
            img.src = item.imagem || "";
            img.alt = item.nome || "Produto";
            img.onerror = function () {
                this.style.display = "none";
            };

            const conteudo = document.createElement("div");

            const nome = document.createElement("h4");
            nome.textContent = item.nome;

            const preco = document.createElement("div");
            preco.className = "item-carrinho-preco";
            preco.textContent = formatarPreco(Number(item.preco) * Number(item.quantidade || 0));

            const acoes = document.createElement("div");
            acoes.className = "item-carrinho-acoes";

            const qtd = document.createElement("div");
            qtd.className = "quantidade";

            const menos = document.createElement("button");
            menos.type = "button";
            menos.textContent = "−";
            menos.setAttribute("aria-label", "Diminuir quantidade");
            menos.addEventListener("click", function () {
                alterarQuantidade(item.id, -1);
            });

            const numero = document.createElement("span");
            numero.textContent = item.quantidade;

            const mais = document.createElement("button");
            mais.type = "button";
            mais.textContent = "+";
            mais.setAttribute("aria-label", "Aumentar quantidade");
            mais.addEventListener("click", function () {
                alterarQuantidade(item.id, 1);
            });

            qtd.appendChild(menos);
            qtd.appendChild(numero);
            qtd.appendChild(mais);

            const remover = document.createElement("button");
            remover.type = "button";
            remover.className = "remover-item";
            remover.textContent = "Remover";
            remover.addEventListener("click", function () {
                removerItem(item.id);
            });

            acoes.appendChild(qtd);
            acoes.appendChild(remover);

            conteudo.appendChild(nome);
            conteudo.appendChild(preco);
            conteudo.appendChild(acoes);

            div.appendChild(img);
            div.appendChild(conteudo);
            lista.appendChild(div);
        });

        total.textContent = formatarPreco(totalCarrinho());
        atualizarContador();
    }

    function adicionarAoCarrinho(produto) {
        if (!produto || produto.id == null) return;

        const existente = carrinho.find(function (item) {
            return item.id === produto.id;
        });

        if (existente) {
            existente.quantidade = Number(existente.quantidade || 0) + 1;
        } else {
            carrinho.push({
                id: produto.id,
                nome: produto.nome,
                preco: Number(produto.preco),
                imagem: produto.imagem,
                quantidade: 1
            });
        }

        salvar();
        renderizarCarrinho();
        abrirCarrinho();
    }

    function alterarQuantidade(id, delta) {
        const item = carrinho.find(function (item) {
            return item.id === id;
        });

        if (!item) return;

        item.quantidade = Number(item.quantidade || 0) + delta;

        if (item.quantidade <= 0) {
            carrinho = carrinho.filter(function (item) {
                return item.id !== id;
            });
        }

        salvar();
        renderizarCarrinho();
    }

    function removerItem(id) {
        carrinho = carrinho.filter(function (item) {
            return item.id !== id;
        });
        salvar();
        renderizarCarrinho();
    }

    function abrirCarrinho() {
        const overlay = document.getElementById("carrinho-overlay");
        if (!overlay) return;

        overlay.classList.add("aberto");
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("carrinho-aberto");
    }

    function fecharCarrinho() {
        const overlay = document.getElementById("carrinho-overlay");
        if (!overlay) return;

        overlay.classList.remove("aberto");
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("carrinho-aberto");
    }

    function finalizarWhatsApp() {
        if (!carrinho.length) {
            alert("Seu carrinho está vazio. Adicione pelo menos um produto.");
            return;
        }

        const linhas = carrinho.map(function (item) {
            const subtotal = Number(item.preco) * Number(item.quantidade || 0);
            return "• " + item.nome +
                " | Qtd: " + item.quantidade +
                " | " + formatarPreco(subtotal);
        });

        const mensagem =
            "Olá! Quero fazer um pedido na Nay Semi Joias.%0A%0A" +
            linhas.join("%0A") +
            "%0A%0A" +
            "Total: " + encodeURIComponent(formatarPreco(totalCarrinho())) +
            "%0A%0A" +
            "Aguardo confirmação do pedido.";

        const url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + mensagem;
        window.open(url, "_blank");
    }

    function configurar() {
        const abrir = document.getElementById("abrir-carrinho");
        const fechar = document.getElementById("fechar-carrinho");
        const continuar = document.getElementById("continuar-comprando");
        const overlay = document.getElementById("carrinho-overlay");
        const finalizar = document.getElementById("finalizar-whatsapp");

        if (abrir) abrir.addEventListener("click", abrirCarrinho);
        if (fechar) fechar.addEventListener("click", fecharCarrinho);
        if (continuar) continuar.addEventListener("click", fecharCarrinho);
        if (finalizar) finalizar.addEventListener("click", finalizarWhatsApp);

        if (overlay) {
            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) fecharCarrinho();
            });
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") fecharCarrinho();
        });

        renderizarCarrinho();
    }

    window.adicionarAoCarrinho = adicionarAoCarrinho;
    window.abrirCarrinho = abrirCarrinho;
    window.fecharCarrinho = fecharCarrinho;
    window.renderizarCarrinho = renderizarCarrinho;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", configurar);
    } else {
        configurar();
    }
})();
