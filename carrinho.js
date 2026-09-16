(function(){
  const KEY='nay_carrinho_v2';
  let cart=[];
  const money=v=>Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  function load(){try{cart=JSON.parse(localStorage.getItem(KEY)||'[]');if(!Array.isArray(cart))cart=[]}catch(e){cart=[]}}
  function save(){localStorage.setItem(KEY,JSON.stringify(cart))}
  function totalQty(){return cart.reduce((s,i)=>s+i.quantidade,0)}
  function update(){
    const counter=document.getElementById('contador-carrinho');
    const items=document.getElementById('itens-carrinho');
    const empty=document.getElementById('carrinho-vazio');
    const totalEl=document.getElementById('total-carrinho');
    if(counter)counter.textContent=totalQty();
    if(!items)return;
    items.innerHTML='';
    if(!cart.length){if(empty)empty.style.display='block';if(totalEl)totalEl.textContent='R$ 0,00';return}
    if(empty)empty.style.display='none';
    let total=0;
    cart.forEach(item=>{
      total+=item.preco*item.quantidade;
      const el=document.createElement('div');el.className='cart-item';
      el.innerHTML='<img src="'+item.imagem+'" alt=""><div><h4></h4><div class="cart-price"></div><div class="cart-actions"><div class="qty"><button type="button" data-cart="menos" data-id="'+item.id+'">−</button><span>'+item.quantidade+'</span><button type="button" data-cart="mais" data-id="'+item.id+'">+</button></div><button class="remove-item" type="button" data-cart="remover" data-id="'+item.id+'">Remover</button></div></div>';
      el.querySelector('h4').textContent=item.nome;el.querySelector('.cart-price').textContent=money(item.preco);
      items.appendChild(el);
    });
    if(totalEl)totalEl.textContent=money(total);
  }
  function openCart(){const o=document.getElementById('carrinho-overlay');if(!o)return;o.classList.add('aberto');o.setAttribute('aria-hidden','false');document.body.classList.add('carrinho-aberto');update()}
  function closeCart(){const o=document.getElementById('carrinho-overlay');if(!o)return;o.classList.remove('aberto');o.setAttribute('aria-hidden','true');document.body.classList.remove('carrinho-aberto')}
  window.adicionarAoCarrinho=function(product){const found=cart.find(i=>i.id===product.id);if(found)found.quantidade++;else cart.push({id:product.id,nome:product.nome,preco:Number(product.preco),imagem:product.imagem,quantidade:1});save();update();openCart()};
  document.addEventListener('click',function(e){
    const b=e.target.closest('[data-cart]');if(!b)return;const id=Number(b.dataset.id),item=cart.find(i=>i.id===id);if(!item)return;
    if(b.dataset.cart==='mais')item.quantidade++;
    if(b.dataset.cart==='menos')item.quantidade--;
    if(b.dataset.cart==='remover'||item.quantidade<=0)cart=cart.filter(i=>i.id!==id);
    save();update();
  });
  document.addEventListener('DOMContentLoaded',function(){
    load();update();
    document.getElementById('abrir-carrinho')?.addEventListener('click',openCart);
    document.getElementById('fechar-carrinho')?.addEventListener('click',closeCart);
    document.getElementById('continuar-comprando')?.addEventListener('click',closeCart);
    document.getElementById('carrinho-overlay')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeCart()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
    document.getElementById('finalizar-whatsapp')?.addEventListener('click',function(){
      if(!cart.length){alert('Seu carrinho está vazio.');return}
      let msg='Olá! Quero fazer um pedido na Nay Semi Joias:\n\n';
      cart.forEach(i=>{msg+=i.quantidade+'x '+i.nome+' — '+money(i.preco*i.quantidade)+'\n'});
      const total=cart.reduce((s,i)=>s+i.preco*i.quantidade,0);msg+='\nTotal: '+money(total);
      window.open('https://wa.me/5519992763019?text='+encodeURIComponent(msg),'_blank','noopener');
    });
  });
})();