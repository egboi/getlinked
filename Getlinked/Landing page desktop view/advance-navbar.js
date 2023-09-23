const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.side-bar');
    const close = document.querySelector('.close');
   
    burger.addEventListener('click',()=>{
        nav.classList.add('nav-active');
  
   
    });

    close.addEventListener('click',()=>{
        nav.classList.remove('nav-active');
});
}

navSlide();