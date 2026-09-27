'use strict'; 
{

   const body = document.querySelector("body");
   const menu = document.getElementById("menu");
   const overlay = document.getElementById("overlay");
   const close = document.getElementById("close");
   const indexes = document.querySelectorAll(".overlay_index > a");
   const overlay_menu = document.getElementById("overlay_menu");
   const overlay_web = document.getElementById("overlay_web");
   const detail_web = document.getElementById("detail_web");
   const close_web = document.getElementById("close_web");
   const overlay_python = document.getElementById("overlay_python");
   const detail_python = document.getElementById("detail_python");
   const close_python = document.getElementById("close_python");
   
   
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add("show");
        setTimeout(() => {
            overlay_menu.classList.add("show");
        }, 150);
    });
    detail_web.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.add("none_scrole");
        overlay_menu.classList.add("hidden");
        overlay.classList.add("show");
        setTimeout(() => {
            overlay_web.classList.add("show");
        }, 150);
    });
    detail_python.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add("show");
        body.classList.add("none_scrole");
        overlay_menu.classList.add("hidden");
        overlay_web.classList.add("hidden");
        setTimeout(() => {
            overlay_python.classList.add("show");
        }, 150);
    });
    close.addEventListener('click', () => {
        overlay_menu.classList.remove("show");
        setTimeout(() => {
            overlay.classList.remove("show");
        }, 100);
    });
    close_web.addEventListener('click', () => {
        overlay_web.classList.remove("show");
        setTimeout(() => {
            overlay.classList.remove("show");
            body.classList.remove("none_scrole");
            overlay_menu.classList.remove("hidden");
        }, 150);
    });
    close_python.addEventListener('click', () => {
        overlay_python.classList.remove("show");
        setTimeout(() => {
            overlay.classList.remove("show");
            body.classList.remove("none_scrole");
            overlay_menu.classList.remove("hidden");
            overlay_web.classList.remove("hidden");
        }, 100);
    });
    indexes.forEach(index => {
        index.addEventListener('click', () => {
            overlay_menu.classList.remove("show");
            setTimeout(() => {
                overlay.classList.remove("show");
            }, 100);
        });
    });
    
    

}