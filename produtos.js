const PRODUTOS = [
  {
    "id": 1,
    "nome": "Choker fina 2mm",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/01-choker-fina-2mm.jpg"
  },
  {
    "id": 2,
    "nome": "Choker fita 2mm",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/02-choker-fita-2mm.jpg"
  },
  {
    "id": 3,
    "nome": "Choker Cartier Elo",
    "preco": "59,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/03-choker-cartier-elo.jpg"
  },
  {
    "id": 4,
    "nome": "Choker fita 4mm",
    "preco": "89,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/04-choker-fita-4mm.jpg"
  },
  {
    "id": 5,
    "nome": "Choker coração cristal com coração liso",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/05-choker-cora-o-cristal-com-cora-o-liso.jpg"
  },
  {
    "id": 6,
    "nome": "Choker trevo madrepérola",
    "preco": "109,90",
    "banho": "Somente banho de ouro",
    "categoria": "Chokers",
    "imagem": "imagens/catalogo/06-choker-trevo-madrep-rola.jpg"
  },
  {
    "id": 7,
    "nome": "Colar cristal preto com trevo",
    "preco": "59,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/07-colar-cristal-preto-com-trevo.jpg"
  },
  {
    "id": 8,
    "nome": "Colar nylon pérola shell com coração",
    "preco": "89,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/08-colar-nylon-p-rola-shell-com-cora-o.jpg"
  },
  {
    "id": 9,
    "nome": "Colar pérola Shell",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/09-colar-p-rola-shell.jpg"
  },
  {
    "id": 10,
    "nome": "Colar nylon com pérola única",
    "preco": "39,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/10-colar-nylon-com-p-rola-nica.jpg"
  },
  {
    "id": 11,
    "nome": "Colar elos oval (40cm + 10cm extensor)",
    "preco": "110,90",
    "banho": "Banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/11-colar-elos-oval-40cm-10cm-extensor.jpg"
  },
  {
    "id": 12,
    "nome": "Colar veneziana esfera G (40cm + 10cm extensor)",
    "preco": "69,90",
    "banho": "Banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/12-colar-veneziana-esfera-g-40cm-10cm-extensor.jpg"
  },
  {
    "id": 13,
    "nome": "Colar snake média (40cm + 10cm extensor)",
    "preco": "110,90",
    "banho": "Banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/13-colar-snake-m-dia-40cm-10cm-extensor.jpg"
  },
  {
    "id": 14,
    "nome": "Colar cordão baiano 3mm (40cm + 10cm extensor)",
    "preco": "109,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/14-colar-cord-o-baiano-3mm-40cm-10cm-extensor.jpg"
  },
  {
    "id": 15,
    "nome": "Colar ponto de luz com borda (40cm + 10cm extensor)",
    "preco": "69,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/15-colar-ponto-de-luz-com-borda-40cm-10cm-extensor.jpg"
  },
  {
    "id": 16,
    "nome": "Colar ponto de luz",
    "preco": "69,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/16-colar-ponto-de-luz.jpg"
  },
  {
    "id": 17,
    "nome": "Colar gravatinha esfera",
    "preco": "69,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/17-colar-gravatinha-esfera.jpg"
  },
  {
    "id": 18,
    "nome": "Colar fita 3mm (40cm + 10cm extensor)",
    "preco": "89,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/18-colar-fita-3mm-40cm-10cm-extensor.jpg"
  },
  {
    "id": 19,
    "nome": "Colar coração liso (40cm + 10cm extensor)",
    "preco": "69,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/19-colar-cora-o-liso-40cm-10cm-extensor.jpg"
  },
  {
    "id": 20,
    "nome": "Colar coração liso (40cm + 10cm extensor)",
    "preco": "79,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/20-colar-cora-o-liso-40cm-10cm-extensor.jpg"
  },
  {
    "id": 21,
    "nome": "Colar ponto de luz gota (40cm + 10cm extensor)",
    "preco": "59,90",
    "banho": "Somente banho de ouro",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/21-colar-ponto-de-luz-gota-40cm-10cm-extensor.jpg"
  },
  {
    "id": 22,
    "nome": "Colar coração cravejado vazado (40cm + 10cm extensor)",
    "preco": "79,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Colares",
    "imagem": "imagens/catalogo/22-colar-cora-o-cravejado-vazado-40cm-10cm-extensor.jpg"
  },
  {
    "id": 23,
    "nome": "Pulseira trevo marrom",
    "preco": "109,90",
    "banho": "Somente banho de ouro",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/23-pulseira-trevo-marrom.jpg"
  },
  {
    "id": 24,
    "nome": "Pulseira esfera com cristal",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/24-pulseira-esfera-com-cristal.jpg"
  },
  {
    "id": 25,
    "nome": "Pulseira coração vazado",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/25-pulseira-cora-o-vazado.jpg"
  },
  {
    "id": 26,
    "nome": "Pulseira cinco corações",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/26-pulseira-cinco-cora-es.jpg"
  },
  {
    "id": 27,
    "nome": "Pulseira coração com Tifany",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/27-pulseira-cora-o-com-tifany.jpg"
  },
  {
    "id": 28,
    "nome": "Pulseira trevo preta",
    "preco": "89,90",
    "banho": "Somente banho de ouro",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/28-pulseira-trevo-preta.jpg"
  },
  {
    "id": 29,
    "nome": "Pulseira cristal preta",
    "preco": "79,90",
    "banho": "Somente banho de ouro",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/29-pulseira-cristal-preta.jpg"
  },
  {
    "id": 30,
    "nome": "Pulseira mini esfera",
    "preco": "46,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/30-pulseira-mini-esfera.jpg"
  },
  {
    "id": 31,
    "nome": "Pulseira São Bento",
    "preco": "39,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/31-pulseira-s-o-bento.jpg"
  },
  {
    "id": 32,
    "nome": "Pulseira cordão baiano 2mm",
    "preco": "59,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/32-pulseira-cord-o-baiano-2mm.jpg"
  },
  {
    "id": 33,
    "nome": "Pulseira medalha piton",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/33-pulseira-medalha-piton.jpg"
  },
  {
    "id": 34,
    "nome": "Pulseira piton (medalhas)",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/34-pulseira-piton-medalhas.jpg"
  },
  {
    "id": 35,
    "nome": "Pulseira malha snake 3mm",
    "preco": "59,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/35-pulseira-malha-snake-3mm.jpg"
  },
  {
    "id": 36,
    "nome": "Pulseira de coração",
    "preco": "59,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/36-pulseira-de-cora-o.jpg"
  },
  {
    "id": 37,
    "nome": "Pulseira elo Cartier",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/37-pulseira-elo-cartier.jpg"
  },
  {
    "id": 38,
    "nome": "Pulseira veneziana com coração",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/38-pulseira-veneziana-com-cora-o.jpg"
  },
  {
    "id": 39,
    "nome": "Pulseira fita 3mm",
    "preco": "59,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/39-pulseira-fita-3mm.jpg"
  },
  {
    "id": 40,
    "nome": "Pulseira coração liso na veneziana",
    "preco": "59,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/40-pulseira-cora-o-liso-na-veneziana.jpg"
  },
  {
    "id": 41,
    "nome": "Bracelete nózinho com pérola",
    "preco": "110,90",
    "banho": "Somente banho de ouro",
    "categoria": "Pulseiras",
    "imagem": "imagens/catalogo/41-bracelete-n-zinho-com-p-rola.jpg"
  },
  {
    "id": 42,
    "nome": "Trio de brincos gota cravejada",
    "preco": "110,90",
    "banho": "Banho de ouro ou ródio branco",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/42-trio-de-brincos-gota-cravejada.jpg"
  },
  {
    "id": 43,
    "nome": "Brinco Virgínia (10mm e 10mm)",
    "preco": "79,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/43-brinco-virg-nia-10mm-e-10mm.jpg"
  },
  {
    "id": 44,
    "nome": "Brinco Virgínia (8mm e 12mm)",
    "preco": "89,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/44-brinco-virg-nia-8mm-e-12mm.jpg"
  },
  {
    "id": 45,
    "nome": "Brinco trio ponto de luz",
    "preco": "49,90",
    "banho": "Somente banho de ouro",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/45-brinco-trio-ponto-de-luz.jpg"
  },
  {
    "id": 46,
    "nome": "Brinco ponto de luz 12mm",
    "preco": "46,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/46-brinco-ponto-de-luz-12mm.jpg"
  },
  {
    "id": 47,
    "nome": "Brinco ponto de luz 10mm",
    "preco": "39,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/47-brinco-ponto-de-luz-10mm.jpg"
  },
  {
    "id": 48,
    "nome": "Brinco ponto de luz 8mm",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/48-brinco-ponto-de-luz-8mm.jpg"
  },
  {
    "id": 49,
    "nome": "Brinco esfera médio",
    "preco": "39,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/49-brinco-esfera-m-dio.jpg"
  },
  {
    "id": 50,
    "nome": "Brinco flor",
    "preco": "69,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/50-brinco-flor.jpg"
  },
  {
    "id": 51,
    "nome": "Trio de ponto luz detalhado",
    "preco": "109,90",
    "banho": "Somente banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/51-trio-de-ponto-luz-detalhado.jpg"
  },
  {
    "id": 52,
    "nome": "Trio de brinco florzinha vazada",
    "preco": "109,90",
    "banho": "Somente banho de prata",
    "categoria": "Tornozeleiras",
    "imagem": "imagens/catalogo/52-trio-de-brinco-florzinha-vazada.jpg"
  },
  {
    "id": 53,
    "nome": "Brinco argola de zircônia",
    "preco": "39,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/53-brinco-argola-de-zirc-nia.jpg"
  },
  {
    "id": 54,
    "nome": "Brinco coroa zircônia",
    "preco": "39,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/54-brinco-coroa-zirc-nia.jpg"
  },
  {
    "id": 55,
    "nome": "Brinco argolinha coração",
    "preco": "39,90",
    "banho": "Somente banho de ouro",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/55-brinco-argolinha-cora-o.jpg"
  },
  {
    "id": 56,
    "nome": "Brinco argola coração vazado",
    "preco": "69,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/56-brinco-argola-cora-o-vazado.jpg"
  },
  {
    "id": 57,
    "nome": "Brinco coração cravejado",
    "preco": "59,90 cada",
    "banho": "Banho de ouro ou ródio",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/57-brinco-cora-o-cravejado.jpg"
  },
  {
    "id": 58,
    "nome": "Brinco coração cravejado vazado",
    "preco": "49,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/58-brinco-cora-o-cravejado-vazado.jpg"
  },
  {
    "id": 59,
    "nome": "Brinco fixo trevo madrepérola",
    "preco": "59,90",
    "banho": "Somente banho de ouro",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/59-brinco-fixo-trevo-madrep-rola.jpg"
  },
  {
    "id": 60,
    "nome": "Trio de brincos florzinha",
    "preco": "109,90",
    "banho": "Somente banho de prata",
    "categoria": "Brincos",
    "imagem": "imagens/catalogo/60-trio-de-brincos-florzinha.jpg"
  },
  {
    "id": 61,
    "nome": "Conjunto mandala de zircônia",
    "preco": "96,90",
    "banho": "Banho de ouro",
    "categoria": "Conjuntos",
    "imagem": "imagens/catalogo/61-conjunto-mandala-de-zirc-nia.jpg"
  },
  {
    "id": 62,
    "nome": "Conjunto nózinho com pérola",
    "preco": "99,90",
    "banho": "Somente banho de ouro",
    "categoria": "Conjuntos",
    "imagem": "imagens/catalogo/62-conjunto-n-zinho-com-p-rola.jpg"
  },
  {
    "id": 63,
    "nome": "Piercing fake zircônia 3mm",
    "preco": "49,90",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Piercings",
    "imagem": "imagens/catalogo/63-piercing-fake-zirc-nia-3mm.jpg"
  },
  {
    "id": 64,
    "nome": "Piercing fake zircônia 2mm",
    "preco": "35,90",
    "banho": "Somente banho de prata",
    "categoria": "Piercings",
    "imagem": "imagens/catalogo/64-piercing-fake-zirc-nia-2mm.jpg"
  },
  {
    "id": 65,
    "nome": "Tornozeleira coração liso na veneziana",
    "preco": "59,90 cada",
    "banho": "Banho de ouro ou banho de prata",
    "categoria": "Tornozeleiras",
    "imagem": "imagens/catalogo/65-tornozeleira-cora-o-liso-na-veneziana.jpg"
  }
];

const NUMERO_WHATSAPP = "5519992763019";
const formatPrice = p => `R$ $page 12 of /mnt/data/Catalogo_Nay_Semi_Joias_CORRIGIDO_FINAL.pdf`;

const grid = document.getElementById("produtos-grid");
const filtro = document.getElementById("filtro-categoria");
const busca = document.getElementById("busca-produtos");
const contador = document.getElementById("contador-carrinho");
const modal = document.getElementById("modal-carrinho");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

let carrinho = JSON.parse(localStorage.getItem("nay_carrinho") || "[]");

function salvarCarrinho() {
  localStorage.setItem("nay_carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

function renderProdutos() {
  const cat = filtro.value;
  const termo = busca.value.trim().toLowerCase();
  const filtrados = PRODUTOS.filter(p =>
    (cat === "Todos" || p.categoria === cat) &&
    (!termo || p.nome.toLowerCase().includes(termo))
  );

  grid.innerHTML = filtrados.map(p => `
    <article class="produto-card">
      <div class="foto-wrap">
        <span class="etiqueta">NOVA COLEÇÃO</span>
        <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
      </div>
      <div class="produto-info">
        <h3>${p.nome}</h3>
        <p class="banho">${p.banho}</p>
        <strong class="preco">${formatPrice(p.preco)}</strong>
        <div class="acoes">
          <button class="btn-carrinho" onclick="adicionarAoCarrinho(${p.id})">🛒 Adicionar ao carrinho</button>
          <button class="btn-whatsapp" onclick="comprarWhatsApp(${p.id})">◉ Comprar pelo WhatsApp</button>
        </div>
      </div>
    </article>
  `).join("") || `<p class="sem-resultados">Nenhum produto encontrado.</p>`;
}

function adicionarAoCarrinho(id) {
  const p = PRODUTOS.find(x => x.id === id);
  const existente = carrinho.find(x => x.id === id);
  if (existente) existente.quantidade += 1;
  else carrinho.push({...p, quantidade:1});
  salvarCarrinho();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(x => x.id !== id);
  salvarCarrinho();
}

function atualizarCarrinho() {
  const quantidade = carrinho.reduce((s,x) => s + x.quantidade, 0);
  contador.textContent = quantidade;
  if (!carrinho.length) {
    listaCarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalCarrinho.textContent = 'R$ 0,00';
    return;
  }
  listaCarrinho.innerHTML = carrinho.map(x => `
    <div class="item-carrinho">
      <img src="${x.imagem}" alt="">
      <div><b>${x.nome}</b><span>${x.quantidade} × R$ ${x.preco}</span></div>
      <button onclick="removerDoCarrinho(${x.id})">×</button>
    </div>
  `).join("");
  const total = carrinho.reduce((s,x) => s + parseFloat(x.preco.replace('.','').replace(',','.')) * x.quantidade, 0);
  totalCarrinho.textContent = total.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
}

function comprarWhatsApp(id) {
  const p = PRODUTOS.find(x => x.id === id);
  const msg = `Olá! Tenho interesse em comprar: ${p.nome} - R$ ${p.preco}.`;
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

function finalizarWhatsApp() {
  if (!carrinho.length) return;
  const linhas = carrinho.map(x => `• ${x.nome} — ${x.quantidade}x — R$ ${x.preco}`).join("\n");
  const msg = `Olá! Gostaria de fazer uma compra:%0A${encodeURIComponent(linhas)}`;
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${msg}`, "_blank");
}

document.getElementById("abrir-carrinho").onclick = () => modal.classList.add("aberto");
document.getElementById("fechar-carrinho").onclick = () => modal.classList.remove("aberto");
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("aberto"); });
filtro.addEventListener("change", renderProdutos);
busca.addEventListener("input", renderProdutos);
document.getElementById("finalizar-whatsapp").onclick = finalizarWhatsApp;

renderProdutos();
atualizarCarrinho();
