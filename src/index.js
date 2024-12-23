import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"

const homeDiv = home();


const homeButton = document.getElementById('home');
homeButton.addEventListener('click', ()=>{
    if(homeDiv.children.length>0){
        homeDiv.innerHTML='';
        home();
    }
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', ()=>{
    const menuDiv = menu();
    if(menuDiv.children.length>0){
        menuDiv.innerHTML='';
        menu();
    }
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', ()=>{
    const contactDiv = contact();
    if(contactDiv.children.length>0){
        contactDiv.innerHTML='';
        contact();
    }
});
