(function () {
  const CHAVE = "nay_carrinho";
  let carrinho = [];

  function carregar() {
    try { carrinho = JSON.parse(localStorage.getItem(CHAVE) || "[]"); } catch(e) { carrinho = []; }
  }
  function salvar() { localStorage.setItem(CHAVE, JSON.stringify(carrinho)); }
  function quantidadeTotal() { return carrinho.reduce((s,i)=>s+i.quantidade,0); }

  function atualizar() {
    const contador=document.getElementById("contador-carrinho");
    const itens=document.getElementById("itens-carrinho");
    const vazio=document.getElementById("carrinho-vazio");
    const totalEl=document.getElementById("total-carrinho");
    if(contador) contador.textContent=quantidadeTotal();
    if(!itens) return;
    itens.innerHTML="";
    if(!carrinho.length){ if(vazio) vazio.style.display="block"; if(totalEl) totalEl.textContent="R$ 0,00"; return; }
    if(vazio) vazio.style.display="none";
    let total=0;
    carrinho.forEach(item=>{
      total += item.preco*item.quantidade;
      const el=document.createElement("div"); el.className="item-carrinho";
      el.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <div>
          <h4>${item.nome}</h4>
          <div class="item-carrinho-preco">${formatarPreco(item.preco)}</div>
          <div class="item-carrinho-acoes">
            <div class="quantidade"><button type="button" data-acao="menos" data-id="${item.id}">−</button><span>${item.quantidade}</span><button type="button" data-acao="mais" data-id="${item.id}">+</button></div>
            <button type="button" class="remover-item" data-acao="remover" data-id="${item.id}">Remover</button>
          </div>
        </div>`;
      itens.appendChild(el);
    });
    if(totalEl) totalEl.textContent=formatarPreco(total);
  }

  function abrir() {
    const ov=document.getElementById("carrinho-overlay"); if(!ov) return;
    ov.classList.add("aberto"); ov.setAttribute("aria-hidden","false"); document.body.classList.add("carrinho-aberto");
    atualizar();
  }
  function fechar() {
    const ov=document.getElementById("carrinho-overlay"); if(!ov) return;
    ov.classList.remove("aberto"); ov.setAttribute("aria-hidden","true"); document.body.classList.remove("carrinho-aberto");
  }

  window.adicionarAoCarrinho=function(produto){
    const existente=carrinho.find(i=>i.id===produto.id);
    if(existente) existente.quantidade += 1;
    else carrinho.push({id:produto.id,nome:produto.nome,preco:produto.preco,imagem:produto.imagem,quantidade:1});
    salvar(); atualizar(); abrir();
  };

  document.addEventListener("click",function(e){
    const btn=e.target.closest("[data-acao]"); if(!btn) return;
    const id=Number(btn.dataset.id); const item=carrinho.find(i=>i.id===id); if(!item) return;
    if(btn.dataset.acao==="mais") item.quantidade++;
    if(btn.dataset.acao==="menos") item.quantidade--;
    if(btn.dataset.acao==="remover" || item.quantidade<=0) carrinho=carrinho.filter(i=>i.id!==id);
    salvar(); atualizar();
  });

  document.addEventListener("DOMContentLoaded",function(){
    carregar(); atualizar();
    document.getElementById("abrir-carrinho")?.addEventListener("click",abrir);
    document.getElementById("fechar-carrinho")?.addEventListener("click",fechar);
    document.getElementById("continuar-comprando")?.addEventListener("click",fechar);
    document.getElementById("carrinho-overlay")?.addEventListener("click",function(e){ if(e.target===this) fechar(); });
    document.getElementById("finalizar-whatsapp")?.addEventListener("click",function(){
      if(!carrinho.length){ alert("Seu carrinho está vazio."); return; }
      let msg="Olá! Quero fazer um pedido na Nay Semi Joias:%0A%0A";
      carrinho.forEach(i=>{ msg += `${i.quantidade}x ${i.nome} — ${formatarPreco(i.preco*i.quantidade)}%0A`; });
      const total=carrinho.reduce((s,i)=>s+i.preco*i.quantidade,0);
      msg += `%0ATotal: ${formatarPreco(total)}`;
      window.open("https://wa.me/5519992763019?text="+msg,"_blank");
    });
  });
})();
