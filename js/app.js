const headerMenu=document.querySelector('.hm-header');
console.log(headerMenu.offsetTop);
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

/*=========================================
   CONTACTENOS
==========================================*/
const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': "application/json"
        }
    });

    if (response.ok) {
        this.reset();
        showNotification('Gracias por contactarnos, pronto nos comunicaremos contigo');
    }
}

function showNotification(message) {
    notificationMessage.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

notificationClose.addEventListener('click', () => {
    notification.style.display = 'none';
});
