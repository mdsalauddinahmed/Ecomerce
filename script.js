 const close = document.getElementById('close');
 const ber = document.getElementById('bir');
 const nev = document.getElementById('navbar');
 if(ber){
    ber.addEventListener('click',() =>{
        nev.classList.add('active')
    })
 }
 if(close){
    close.addEventListener('click',() =>{
        nev.classList.remove('active')
    })
 }