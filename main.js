'use strict'; 
{
    const open = document.getElementById('menu_open');
    const menu = document.getElementById('mobile_menu');
    const box = document.querySelector('.box > ul');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let counter = 1;

    function slidePanel(slideWidth) {
        box.style.transform = `translateX(${slideWidth / 2 - 516 - 343.5 * counter}px)`;
    }
    window.addEventListener('load', () => {
        const slideWidth = box.getBoundingClientRect().width;
        if(slideWidth > 500) {
            slidePanel(slideWidth);
        }
    });
    open.addEventListener('click', () => {
        open.classList.add('active');
        menu.classList.add('active');
    });
    menu.addEventListener('click', () => {
        open.classList.remove('active');
        menu.classList.remove('active');
    });
    next.addEventListener('click', () => {
        next.classList.add('active');
        prev.classList.add('active');
        counter++;       
        const slideWidth = box.getBoundingClientRect().width;
        box.style.transition = 'transform 0.2s';
        slidePanel(slideWidth);
        if(counter === 4) {
            counter = 1;
            setTimeout(() => {
                box.style.transition = 'transform 0s';
                slidePanel(slideWidth);
            }, 200);
        }
        setTimeout(() => {
            next.classList.remove('active');
            prev.classList.remove('active');
        }, 400);
    });
    prev.addEventListener('click', () => {
        next.classList.add('active');
        prev.classList.add('active');
        counter--;       
        const slideWidth = box.getBoundingClientRect().width;
        box.style.transition = 'transform 0.2s';
        slidePanel(slideWidth);
        if(counter === 0) {
            counter = 3;
            setTimeout(() => {
                box.style.transition = 'transform 0s';
                slidePanel(slideWidth);
            }, 200);
        }
        setTimeout(() => {
            next.classList.remove('active');
            prev.classList.remove('active');
        }, 400);
    });

    const dialoge = document.getElementById('dialoge');
    const confirm = document.getElementById('confirm');
    const back = document.getElementById('back');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const confirmName = document.getElementById('confirmName');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmMessage = document.getElementById('confirmMessage');
    

    confirm.addEventListener('click', () => {
        if (name.value.trim() === "") {
            alert('お名前を入力してください。');
            return;
        }
        if (email.value.trim() === "") {
            alert('emailアドレスを入力してください。');
            return;
        }
        if (message.value.trim() === "") {
            alert('メッセージを入力してください。');
            return;
        }
        dialoge.classList.add('open');
        confirmName.textContent = `お名前： ${name.value}`;
        confirmEmail.textContent = `email： ${email.value}`;
        confirmMessage.textContent = `メッセージ： ${message.value}`;
        
    });
    back.addEventListener('click', () => {
        dialoge.classList.remove('open');
    });



}