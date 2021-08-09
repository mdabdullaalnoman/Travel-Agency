 let dropBtn = document.querySelector('button');
 let dropMenu = document.querySelector('#drop-menu');

 dropBtn.addEventListener('click', () => {
     dropMenu.classList.toggle('active')
 })


 // main menu hide show
 let hambarger = document.querySelector('#hambargar');
 let mainMenus = document.querySelector('.nav');

 hambarger.addEventListener('click' , () => {
     mainMenus.classList.toggle('actives')
 })