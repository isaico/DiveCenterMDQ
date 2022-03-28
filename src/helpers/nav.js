const nav=document.querySelector('#nav');
let scroll_position=0;

const slideNav=(pos)=>{
    pos ? nav.className += 'nav-slide' : nav.classList.remove('nav-slide')
}
window.addEventListener('scroll',()=>{
    scroll_position=window.scrollY;
    console.log(scroll_position)
    if(scroll_position>0){
        window.requestAnimationFrame(
           slideNav(scroll_position)
       ) 
    }
})