const produtos = [
  {id:1, nome:"Choker fina 2mm", preco:79.90, categoria:"Chokers", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0088.jpg"},
  {id:2, nome:"Choker fita 2mm", preco:79.90, categoria:"Chokers", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0066.jpg"},
  {id:3, nome:"Choker Cartier Elo", preco:59.90, categoria:"Chokers", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0093.jpg"},
 {id:4, nome:"Choker fita 4mm", preco:89.90, categoria:"Chokers", cores:["Dourado", "Prateado"], imagem:"imagens/arquivo_0000000093f881f590fd8bfd002fa83c.png"},
  {id:5, nome:"Choker coração cristal com coração liso", preco:79.90, categoria:"Chokers", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0112.jpg"},
  {id:6, nome:"Choker trevo madrepérola", preco:109.90, categoria:"Chokers", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0126.jpg"},
  {id:7, nome:"Colar cristal preto com trevo", preco:59.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0066.jpg"},
  {id:8, nome:"Colar nylon pérola shell com coração", preco:89.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0088.jpg"},
  {id:9, nome:"Colar pérola Shell", preco:79.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0090.jpg"},
  {id:10, nome:"Colar nylon com pérola única", preco:39.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0090.jpg"},
  {id:11, nome:"Colar elos oval (40cm + 10cm extensor)", preco:110.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0091.jpg"},
  {id:12, nome:"Colar snake média (40cm + 10cm extensor)", preco:110.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0091.jpg"},
  {id:13, nome:"Colar veneziana esfera G (40cm + 10cm extensor)", preco:69.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0091.jpg"},
  {id:14, nome:"Colar cordão baiano 3mm (40cm + 10cm extensor)", preco:109.90, categoria:"Colares", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0093.jpg"},
  {id:15, nome:"Colar ponto de luz com borda (40cm + 10cm extensor)", preco:69.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0094.jpg"},
  {id:16, nome:"Colar ponto de luz", preco:69.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/catalogo-imagem-17.jpg"},
  {id:17, nome:"Colar gravatinha esfera", preco:69.90, categoria:"Colares", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0101.jpg"},
  {id:18, nome:"Colar fita 3mm (40cm + 10cm extensor)", preco:89.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0115.jpg"},
  {id:19, nome:"Colar coração liso (40cm + 10cm extensor)", preco:69.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0115.jpg"},
  {id:20, nome:"Colar ponto de luz gota (40cm + 10cm extensor)", preco:59.90, categoria:"Colares", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0115.jpg"},
  {id:21, nome:"Colar coração liso (40cm + 10cm extensor)", preco:79.90, categoria:"Colares", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0120.jpg"},
  {id:22, nome:"Colar coração cravejado vazado (40cm + 10cm extensor)", preco:79.90, categoria:"Colares", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0124.jpg"},
  {id:23, nome:"Pulseira trevo marrom", preco:109.90, categoria:"Pulseiras", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0089(1).jpg"},
  {id:24, nome:"Pulseira esfera com cristal", preco:79.90, categoria:"Pulseiras", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0089(1).jpg"},
  {id:25, nome:"Pulseira coração vazado", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0097.jpg"},
  {id:26, nome:"Pulseira cinco corações", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0097.jpg"},
  {id:27, nome:"Pulseira coração com Tifany", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0097.jpg"},
  {id:28, nome:"Pulseira trevo preta", preco:89.90, categoria:"Pulseiras", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0111.jpg"},
  {id:29, nome:"Pulseira cristal preta", preco:79.90, categoria:"Pulseiras", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0111.jpg"},
  {id:30, nome:"Pulseira mini esfera", preco:46.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0114.jpg"},
  {id:31, nome:"Pulseira São Bento", preco:39.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0114.jpg"},
  {id:32, nome:"Pulseira cordão baiano 2mm", preco:59.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0114.jpg"},
  {id:33, nome:"Pulseira medalha piton", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0117.jpg"},
  {id:34, nome:"Pulseira piton (medalhas)", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0118.jpg"},
  {id:35, nome:"Pulseira malha snake 3mm", preco:59.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0118.jpg"},
  {id:36, nome:"Pulseira de coração", preco:59.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0118.jpg"},
  {id:37, nome:"Pulseira elo Cartier", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0118.jpg"},
  {id:38, nome:"Pulseira veneziana com coração", preco:49.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0119.jpg"},
  {id:39, nome:"Pulseira fita 3mm", preco:59.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0118.jpg"},
  {id:40, nome:"Pulseira coração liso na veneziana", preco:59.90, categoria:"Pulseiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0119.jpg"},
  {id:41, nome:"Bracelete nózinho com pérola", preco:110.90, categoria:"Braceletes", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0125.jpg"},
  {id:42, nome:"Trio de brincos gota cravejada", preco:110.90, categoria:"Brincos", cores:["Dourado", "Ródio branco"], imagem:"imagens/IMG-20260909-WA0095.jpg"},
  {id:43, nome:"Brinco Virgínia (8mm e 12mm)", preco:89.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0096.jpg"},
  {id:44, nome:"Brinco Virgínia (10mm e 10mm)", preco:79.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0096.jpg"},
  {id:45, nome:"Brinco trio ponto de luz", preco:49.90, categoria:"Brincos", cores:["Dourado"], imagem:"imagens/catalogo-imagem-17.jpg"},
  {id:46, nome:"Brinco ponto de luz 12mm", preco:46.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0100.jpg"},
  {id:47, nome:"Brinco ponto de luz 10mm", preco:39.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0100.jpg"},
  {id:48, nome:"Brinco ponto de luz 8mm", preco:49.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0100.jpg"},
  {id:49, nome:"Brinco esfera médio", preco:39.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0101.jpg"},
  {id:50, nome:"Brinco flor", preco:69.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0102.jpg"},
  {id:51, nome:"Trio de ponto luz detalhado", preco:109.90, categoria:"Brincos", cores:["Prateado"], imagem:"imagens/IMG-20260909-WA0103.jpg"},
  {id:52, nome:"Trio de brinco florzinha vazada", preco:109.90, categoria:"Brincos", cores:["Prateado"], imagem:"imagens/IMG-20260909-WA0103.jpg"},
  {id:53, nome:"Brinco argola de zircônia", preco:39.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0104.jpg"},
  {id:54, nome:"Brinco coroa zircônia", preco:39.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0110(1).jpg"},
  {id:55, nome:"Brinco argolinha coração", preco:39.90, categoria:"Brincos", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0121.jpg"},
  {id:56, nome:"Brinco argola coração vazado", preco:69.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0122.jpg"},
  {id:57, nome:"Brinco coração cravejado", preco:59.90, categoria:"Brincos", cores:["Dourado", "Ródio"], imagem:"imagens/IMG-20260909-WA0112.jpg"},
  {id:58, nome:"Brinco coração cravejado vazado", preco:49.90, categoria:"Brincos", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0131(1).jpg"},
  {id:59, nome:"Brinco fixo trevo madrepérola", preco:59.90, categoria:"Brincos", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0126.jpg"},
  {id:60, nome:"Trio de brincos florzinha", preco:109.90, categoria:"Brincos", cores:["Prateado"], imagem:"imagens/IMG-20260909-WA0131.jpg"},
  {id:61, nome:"Conjunto mandala de zircônia", preco:96.90, categoria:"Conjuntos", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0099.jpg"},
  {id:62, nome:"Conjunto nózinho com pérola", preco:99.90, categoria:"Conjuntos", cores:["Dourado"], imagem:"imagens/IMG-20260909-WA0125.jpg"},
  {id:63, nome:"Piercing fake zircônia 3mm", preco:49.90, categoria:"Piercings", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0100.jpg"},
  {id:64, nome:"Piercing fake zircônia 2mm", preco:35.90, categoria:"Piercings", cores:["Prateado"], imagem:"imagens/IMG-20260909-WA0131.jpg"},
  {id:65, nome:"Tornozeleira coração liso na veneziana", preco:59.90, categoria:"Tornozeleiras", cores:["Dourado", "Prateado"], imagem:"imagens/IMG-20260909-WA0116.jpg"},
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
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
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.loading = "lazy";
    img.onerror = function() { imagem.innerHTML = '<span class="sem-imagem">Foto indisponível</span>'; };
    imagem.appendChild(img);
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
    cores.textContent = "Banho: " + produto.cores.join(" • ");
    const botaoWhatsApp = document.createElement("button");
botaoWhatsApp.textContent = "Falar com consultor via WhatsApp";

botaoWhatsApp.addEventListener("click", function() {
    const mensagem =
        "Olá! Tenho interesse em " + produto.nome +
        " - " + formatarPreco(produto.preco) +
        " - Banho: " + produto.cores.join(" • ");

    window.open(
        "https://wa.me/5511999999999?text=" + encodeURIComponent(mensagem),
        "_blank"
    );
});

const botaoCarrinho = document.createElement("button");
botaoCarrinho.className = "adicionar-carrinho";
botaoCarrinho.type = "button";
botaoCarrinho.textContent = "Adicionar ao carrinho";

botaoCarrinho.addEventListener("click", function() {
    if (typeof window.adicionarAoCarrinho === "function") {
        window.adicionarAoCarrinho(produto);
    }
});

info.appendChild(categoria);
info.appendChild(nome);
info.appendChild(preco);
info.appendChild(cores);
info.appendChild(botaoWhatsApp);
info.appendChild(botaoCarrinho);

card.appendChild(imagem);
card.appendChild(info);
container.appendChild(card);
