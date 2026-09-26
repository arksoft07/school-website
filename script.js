function toggleMenu(){const n=document.getElementById('navLinks');n.style.display=n.style.display==='flex'?'none':'flex'}
function showMessage(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)}
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=800)document.getElementById('navLinks').style.display='none'}));
