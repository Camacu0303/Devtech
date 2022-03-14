function init(){
var x= document.getElementById("menu-btn");
var z = document.querySelector(".nav-menu");
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
window.onresize= function(e){
    z.style.transform="none";

}
var y= false;
x.onclick= function(e){
    if (y==false) {
        document.getsi
        z.style.transform= "translateX(-10%)";
    
        z.style.display="show";
        z.style.float="left";
       
        y=true;
    }else{
        z.style.transform= "translateX(-300%)";
        y=false;
    }
}
}