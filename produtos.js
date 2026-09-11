const produtos = [
{id:1,nome:"Choker fina 2mm",preco:79.90,categoria:"Chokers",cores:["Dourado"]},
{id:2,nome:"Colar cristal preto com trevo",preco:59.90,categoria:"Colares",cores:["Dourado"]},
{id:3,nome:"Choker fita 2mm",preco:79.90,categoria:"Chokers",cores:["Dourado"]},
{id:4,nome:"Colar nylon pérola shell com coração",preco:89.90,categoria:"Colares",cores:["Dourado"]},
{id:5,nome:"Pulseira trevo marrom",preco:109.90,categoria:"Pulseiras",cores:["Dourado"]},
{id:6,nome:"Pulseira esfera com cristal",preco:79.90,categoria:"Pulseiras",cores:["Dourado"]},
{id:7,nome:"Colar pérola Shell",preco:79.90,categoria:"Colares",cores:["Dourado"]},
{id:8,nome:"Colar nylon com pérola única",preco:39.90,categoria:"Colares",cores:["Dourado"]},
{id:9,nome:"Colar elos oval (40cm + 10cm extensor)",preco:110.90,categoria:"Colares",cores:["Dourado"]},
{id:10,nome:"Colar snake média (40cm + 10cm extensor)",preco:110.90,categoria:"Colares",cores:["Dourado"]},
{id:11,nome:"Colar veneziana esfera G (40cm + 10cm extensor)",preco:69.90,categoria:"Colares",cores:["Dourado"]},
{id:12,nome:"Choker elo Cartier",preco:59.90,categoria:"Chokers",cores:["Dourado","Prateado"]},
{id:13,nome:"Choker fita 4mm",preco:89.90,categoria:"Chokers",cores:["Dourado","Prateado"]},
{id:14,nome:"Colar cordão baiano 3mm (40cm + 10cm extensor)",preco:109.90,categoria:"Colares",cores:["Dourado","Prateado"]},
{id:15,nome:"Colar ponto de luz com borda (40cm + 10cm extensor)",preco:69.90,categoria:"Colares",cores:["Dourado"]},
{id:16,nome:"Trio de brincos gota cravejada",preco:110.90,categoria:"Brincos",cores:["Dourado","Ródio branco"]},
{id:17,nome:"Brinco Virgínia (8mm e 12mm)",preco:89.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:18,nome:"Brinco Virgínia (10mm e 10mm)",preco:79.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:19,nome:"Pulseira coração vazado",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:20,nome:"Pulseira cinco corações",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:21,nome:"Pulseira coração com Tifany",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:22,nome:"Brinco trio ponto de luz",preco:49.90,categoria:"Brincos",cores:["Dourado"]},
{id:23,nome:"Colar ponto de luz",preco:69.90,categoria:"Colares",cores:["Dourado"]},
{id:24,nome:"Conjunto mandala de zircônia",preco:96.90,categoria:"Conjuntos",cores:["Dourado"]},
{id:25,nome:"Brinco ponto de luz 12mm",preco:46.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:26,nome:"Brinco ponto de luz 10mm",preco:39.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:27,nome:"Brinco ponto de luz 8mm",preco:49.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:28,nome:"Piercing fake zircônia 3mm",preco:49.90,categoria:"Piercings",cores:["Dourado","Prateado"]},
{id:29,nome:"Brinco esfera médio",preco:39.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:30,nome:"Colar gravatinha esfera",preco:69.90,categoria:"Colares",cores:["Dourado","Prateado"]},
{id:31,nome:"Brinco flor",preco:69.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:32,nome:"Trio de ponto luz detalhado",preco:109.90,categoria:"Brincos",cores:["Prateado"]},
{id:33,nome:"Trio de brinco florzinha vazada",preco:109.90,categoria:"Brincos",cores:["Prateado"]},
{id:34,nome:"Brinco argola de zircônia",preco:39.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:35,nome:"Brinco coroa zircônia",preco:39.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:36,nome:"Pulseira trevo preta",preco:89.90,categoria:"Pulseiras",cores:["Dourado"]},
{id:37,nome:"Pulseira cristal preta",preco:79.90,categoria:"Pulseiras",cores:["Dourado"]},
{id:38,nome:"Choker coração cristal com coração liso",preco:79.90,categoria:"Chokers",cores:["Dourado"]},
{id:39,nome:"Brinco argolinha coração",preco:39.90,categoria:"Brincos",cores:["Dourado"]},
{id:40,nome:"Pulseira mini esfera",preco:46.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:41,nome:"Pulseira São Bento",preco:39.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:42,nome:"Pulseira cordão baiano 2mm",preco:59.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:43,nome:"Colar fita 3mm (40cm + 10cm extensor)",preco:89.90,categoria:"Colares",cores:["Dourado"]},
{id:44,nome:"Colar coração liso (40cm + 10cm extensor)",preco:69.90,categoria:"Colares",cores:["Dourado"]},
{id:45,nome:"Colar ponto de luz gota (40cm + 10cm extensor)",preco:59.90,categoria:"Colares",cores:["Dourado"]},
{id:46,nome:"Tornozeleira coração liso na veneziana",preco:59.90,categoria:"Tornozeleiras",cores:["Dourado","Prateado"]},
{id:47,nome:"Pulseira medalha piton",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:48,nome:"Pulseira veneziana com coração",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:49,nome:"Pulseira fita 3mm",preco:59.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:50,nome:"Pulseira piton (medalhas)",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:51,nome:"Pulseira malha snake 3mm",preco:59.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:52,nome:"Pulseira de coração",preco:59.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:53,nome:"Pulseira elo Cartier",preco:49.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:54,nome:"Pulseira coração liso na veneziana",preco:59.90,categoria:"Pulseiras",cores:["Dourado","Prateado"]},
{id:55,nome:"Colar coração liso (40cm + 10cm extensor)",preco:79.90,categoria:"Colares",cores:["Dourado","Prateado"]},
{id:56,nome:"Brinco argola coração vazado",preco:69.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:57,nome:"Brinco coração cravejado",preco:59.90,categoria:"Brincos",cores:["Dourado","Ródio"]},
{id:58,nome:"Brinco coração cravejado vazado",preco:49.90,categoria:"Brincos",cores:["Dourado","Prateado"]},
{id:59,nome:"Colar coração cravejado vazado (40cm + 10cm extensor)",preco:79.90,categoria:"Colares",cores:["Dourado","Prateado"]},
{id:60,nome:"Conjunto nózinho com pérola",preco:99.90,categoria:"Conjuntos",cores:["Dourado"]},
{id:61,nome:"Bracelete nózinho com pérola",preco:110.90,categoria:"Braceletes",cores:["Dourado"]},
{id:62,nome:"Brinco fixo trevo madrepérola",preco:59.90,categoria:"Brincos",cores:["Dourado"]},
{id:63,nome:"Choker trevo madrepérola",preco:109.90,categoria:"Chokers",cores:["Dourado"]},
{id:64,nome:"Trio de brincos florzinha",preco:109.90,categoria:"Brincos",cores:["Prateado"]},
{id:65,nome:"Piercing fake zircônia 2mm",preco:35.90,categoria:"Piercings",cores:["Prateado"]}
];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function renderizarProdutos(lista) {
    const container = document.getElementById("produtos");

    if (!container) return;

    container.innerHTML = "";

    lista.forEach(function(produto) {

        const card = document.createElement("article");
        card.className = "produto-card";

        const imagem = document.createElement("div");
        imagem.className = "produto-imagem";

        const semImagem = document.createElement("span");
        semImagem.className = "sem-imagem";
        semImagem.textContent = "Foto do produto";

        imagem.appendChild(semImagem);

        const info = document.createElement("div");
        info.className = "produto-info";

        const categoria = document.createElement("span");
        categoria.className = "produto-categoria";
        categoria.textContent = produto.categoria;

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const preco = document.createElement("strong");
        preco.textContent = formatarPreco(produto.preco);

        const cores = document.createElement("p");
        cores.textContent = "Cores: " + produto.cores.join(" • ");

        const botao = document.createElement("button");
        botao.textContent = "Comprar";

        botao.addEventListener("click", function() {
            alert(
                produto.nome +
                "\n" +
                formatarPreco(produto.preco) +
                "\nCores: " +
                produto.cores.join(", ")
            );
        });

        info.appendChild(categoria);
        info.appendChild(nome);
        info.appendChild(preco);
        info.appendChild(cores);
        info.appendChild(botao);

        card.appendChild(imagem);
        card.appendChild(info);

        container.appendChild(card);
    });
}

window.produtos = produtos;
window.formatarPreco = formatarPreco;
window.renderizarProdutos = renderizarProdutos;

document.addEventListener("DOMContentLoaded", function() {
    renderizarProdutos(produtos);
});
