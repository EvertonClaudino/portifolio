//Scrool smoth nav-bar
function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#log").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#home");
 });

document.querySelector("#hom").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#home");
 });
 

document.querySelector("#quemso").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#quemsou");
 });

 document.querySelector("#quemso").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#quemsou");
 });

 document.querySelector("#projeto").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#projetos");
 });

 document.querySelector("#habilidade").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#habilidades");
 });


//Scroll of the page
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () =>{
    const windowTop = window.pageYOffset + window.innerHeight -0.8;

    item.forEach (element => {
        if ( windowTop > element.offsetTop ){
            element.classList.add( "animate" );
        } else {
            element.classList.remove( "animate" )
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})

//Translate text
const msg = "Front-End Developer Junior";
let txt3 = document.querySelector('.txt3');
for(var i=0;i<msg.length;i++){
    (function(pos){

        setTimeout(function(){

            txt3.innerHTML += msg.charAt(pos);
        },100*pos);
    })(i);
}

//Text Habilidades

//Desc HTML
const textfix = document.querySelector("#text-fix")
var deschtml = document.querySelector('#icon-html');

deschtml.addEventListener("mouseover", function(){
var texthtml =  document.querySelector("#text-html")
texthtml.classList.remove("hide");

var textfix = document.querySelector("#text-fix")
textfix.classList.add("hide");
});

var deschtml = document.querySelector('#icon-html');
deschtml.addEventListener("mouseout", function(){
var texthtml =  document.querySelector("#text-html")
texthtml.classList.add("hide");

textfix.classList.remove("hide");
});

//Desc CSS
var desccss = document.querySelector('#icon-css');

desccss.addEventListener("mouseover", function(){
var textcss =  document.querySelector("#text-css")
textcss.classList.remove("hide");

textfix.classList.add("hide");
});

var desccss = document.querySelector('#icon-css');
desccss.addEventListener("mouseout", function(){
var textcss =  document.querySelector("#text-css")
textcss.classList.add("hide");

textfix.classList.remove("hide");
});

//Desc JS
var descjs = document.querySelector('#icon-js');
descjs.addEventListener("mouseover", function(){
var textjs =  document.querySelector("#text-js")
textjs.classList.remove("hide");

textfix.classList.add("hide");
});

var descjs = document.querySelector('#icon-js');

descjs.addEventListener("mouseout", function(){
var textjs =  document.querySelector("#text-js")
textjs.classList.add("hide");

textfix.classList.remove("hide");
});

//Desc React
var descreact = document.querySelector('#icon-react');

descreact.addEventListener("mouseover", function(){
var textreact =  document.querySelector("#text-react");
textreact.classList.remove("hide");

textfix.classList.add("hide");
});

var descreact = document.querySelector('#icon-react');
descreact.addEventListener("mouseout", function(){
var textreact =  document.querySelector("#text-react");
textreact.classList.add("hide");

textfix.classList.remove("hide");
});

//Desc GitHub
var descgithub = document.querySelector('#icon-github');

descgithub.addEventListener("mouseover", function(){
var textgithub =  document.querySelector("#text-github")
textgithub.classList.remove("hide");

textfix.classList.add("hide");
});

var descgithub = document.querySelector('#icon-github');
descgithub.addEventListener("mouseout", function(){
var textgithub =  document.querySelector("#text-github")
textgithub.classList.add("hide");

textfix.classList.remove("hide");
});

//Desc Git
var descgit = document.querySelector('#icon-git');

descgit.addEventListener("mouseover", function(){
var textgit =  document.querySelector("#text-git")
textgit.classList.remove("hide");

textfix.classList.add("hide");
});

var descgit = document.querySelector('#icon-git');
descgit.addEventListener("mouseout", function(){
var textgit =  document.querySelector("#text-git")
textgit.classList.add("hide");

textfix.classList.remove("hide");
});



const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event ){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active');

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);