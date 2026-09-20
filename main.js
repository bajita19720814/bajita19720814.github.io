'use strict'; 
{
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
   
   


    menu.addEventListener('click', () => {
        overlay.classList.remove("hidden");
        overlay_menu.classList.remove("hidden");
    });
    detail_web.addEventListener('click', () => {
        overlay.classList.remove("hidden");
        overlay_web.classList.remove("hidden");
    });
    detail_python.addEventListener('click', () => {
        overlay.classList.remove("hidden");
        overlay_python.classList.remove("hidden");
    });
    close.addEventListener('click', () => {
        overlay.classList.add("hidden");
        overlay_menu.classList.add("hidden");
    });
    close_web.addEventListener('click', () => {
        overlay.classList.add("hidden");
        overlay_web.classList.add("hidden");
    });
    close_python.addEventListener('click', () => {
        overlay.classList.add("hidden");
        overlay_python.classList.add("hidden");
    });
    indexes.forEach(index => {
                index.addEventListener('click', () => {
                overlay.classList.add("hidden");
                overlay_menu.classList.add("hidden");
            });
    });
    
    

}