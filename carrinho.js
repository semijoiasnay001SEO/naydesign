(function () {
    const CHAVE_CARRINHO = "naySemiJoiasCarrinho";
    let carrinho = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || "[]");

    function salvar() {
        localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
    }

    function quantidadeTotal() {
        return carrinho.reduce((total, item) => total + item.quantidade, 0);
    }

    function totalCarrinho() {
        return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }

    function formatarPreco(valor) {
        return valor.toLocaleString("pt-BR", {
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
            img.src = item.imagem;
            img.alt = item.nome;

            const conteudo = document.createElement("div");

            const nome = document.createElement("h4");
            nome.textContent = item.nome;

            const preco = document.createElement("div");
            preco.className = "item-carrinho-preco";
            preco.textContent = formatarPreco(item.preco * item.quantidade);

            const acoes = document.createElement("div");
            acoes.className = "item-carrinho-acoes";

            const qtd = document.createElement("div");
            qtd.className = "quantidade";

            const menos = document.createElement("button");
            menos.type = "button";
            menos.textContent = "−";
            menos.addEventListener("click", function () {
                alterarQuantidade(item.id, -1);
            });

            const numero = document.createElement("span");
            numero.textContent = item.quantidade;

            const mais = document.createElement("button");
            mais.type = "button";
            mais.textContent = "+";
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
        const existente = carrinho.find(item => item.id === produto.id);

        if (existente) {
            existente.quantidade += 1;
        } else {
            carrinho.push({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                imagem: produto.imagem,
                quantidade: 1
            });
        }

        salvar();
        renderizarCarrinho();
        abrirCarrinho();
    }

    function alterarQuantidade(id, delta) {
        const item = carrinho.find(item => item.id === id);
        if (!item) return;

        item.quantidade += delta;

        if (item.quantidade <= 0) {
            carrinho = carrinho.filter(item => item.id !== id);
        }

        salvar();
        renderizarCarrinho();
    }

    function removerItem(id) {
        carrinho = carrinho.filter(item => item.id !== id);
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

    function configurar() {
        document.getElementById("abrir-carrinho")?.addEventListener("click", abrirCarrinho);

        document.getElementById("fechar-carrinho")?.addEventListener("click", fecharCarrinho);

        document.getElementById("continuar-comprando")?.addEventListener("click", fecharCarrinho);

        document.getElementById("carrinho-overlay")?.addEventListener("click", function (event) {
