(() => {
const $=s=>document.querySelector(s);
const menu=$('#menuBtn'), nav=$('#nav');
if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));

function clock(){
 const el=$('#clock'); if(!el)return;
 el.textContent=new Intl.DateTimeFormat('id-ID',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());
}
clock(); setInterval(clock,1000);

document.querySelectorAll('a[href]').forEach(a=>{
 const href=a.getAttribute('href');
 if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto:')||a.target)return;
 a.addEventListener('click',e=>{
   e.preventDefault(); document.body.classList.add('leaving');
   setTimeout(()=>location.href=href,180);
 });
});

const p=$('#particles');
if(p){
 for(let i=0;i<18;i++){
  const s=document.createElement('span'); s.className='particle';
  s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
  s.style.animationDelay=(-Math.random()*8)+'s';s.style.animationDuration=(6+Math.random()*8)+'s';
  p.appendChild(s);
 }
}
})();