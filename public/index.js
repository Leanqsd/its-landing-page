const menu = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const items = document.querySelectorAll('li');
menu.addEventListener('click',()=>{
    sidebar.classList.toggle('bigSidebar');
    items.forEach((item)=>{
        item.classList.toggle('hidden')
    })

});