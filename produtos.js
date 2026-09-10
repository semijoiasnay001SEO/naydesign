const produtos = [

    {
        nome: "Choker fina 2mm",
        preco: "R$ 79,90",
        categoria: "chokers",
        banho: "Somente ouro",
        imagem: "imagens/choker-fina-2mm.jpg"
    },

    {
        nome: "Colar cristal preto com trevo",
        preco: "R$ 59,90",
        categoria: "colares",
        banho: "Somente ouro",
        imagem: "imagens/colar-cristal-preto-trevo.jpg"
    },

    {
        nome: "Choker fita 2mm",
        preco: "R$ 79,90",
        categoria: "chokers",
        banho: "Somente ouro",
        imagem: "imagens/choker-fita-2mm.jpg"
    }

    // ...continuaremos com os demais produtos
];


function mostrarProdutos(lista) {

    const area = document.getElementById("produtos");

    area.innerHTML = "";

    lista.forEach(produto => {

        area.innerHTML += `

            <article class="produto-card">

                <img
                    class="produto-imagem"
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="produto-info">

                    <div class="produto-categoria">
                        ${produto.categoria}
                    </div>

                    <h2 class="produto-nome">
                        ${produto.nome}
                    </h2>

                    <div class="produto-preco">
                        ${produto.preco}
                    </div>

                    <div class="produto-banho">
                        ${produto.banho}
                    </div>

                    <button
                        class="btn-comprar"
                        onclick="comprar('${produto.nome}')"
                    >
                        Comprar
                    </button>

                </div>

            </article>

        `;
    });
}


function filtrar(categoria) {

    if (categoria === "todos") {
        mostrarProdutos(produtos);
        return;
    }

    const resultado = produtos.filter(
        produto => produto.categoria === categoria
    );

    mostrarProdutos(resultado);
}


function comprar(nome) {

    alert(
        "Produto selecionado: " + nome
    );

}


mostrarProdutos(produtos);
