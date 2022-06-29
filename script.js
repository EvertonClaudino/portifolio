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