//Contact us
var Lname = document.getElementById("Lname");
var Lemail = document.getElementById("Lemail");
var Lcomment = document.getElementById("Lcomment");
var Iname = document.getElementById("name");
var Iemail = document.getElementById("email");
var Icomment = document.getElementById("comment");
Iname.addEventListener('input',function(){
    if(Iname.value!=""){
        Lname.style.top = "-10px";
    }else{
        Lname.style.top = "";
    }    
})
Iemail.addEventListener('input',function(){
    if(Iemail.value!=""){
        Lemail.style.top = "-10px";
    }else{
        Lemail.style.top = "";
    }    
})
Icomment.addEventListener('input',function(){
    if(Icomment.value!=""){
        Lcomment.style.top = "-10px";
    }else{
        Lcomment.style.top = "";
    }    
})
//bar menu
var bar = document.getElementById("bar");
var barmenu = document.getElementById("barmenu");
var cancel = document.getElementById("cancel");
var options = barmenu.getElementsByTagName("a");
var sections = document.getElementsByTagName("section");
var header = document.getElementById("header");
var brightness = document.getElementById("brightness");
bar.addEventListener('click',function(){
    barmenu.style.display = "flex";
    header.style.display = "none";
    brightness.style.display = "block"
    /* for(var i=0;sections.length>i;++i){
        sections[i].style.filter = "brightness(0.5)";
    } */
})
cancel.addEventListener('click',function(){
    barmenu.style.display = "none"
    header.style.display = "";
    brightness.style.display = "none"
    /* for(var i=0;sections.length>i;++i){
        sections[i].style.filter = "";
    } */
})
for(var i =0;options.length>i;++i){
    options[i].addEventListener('click',function(){
        barmenu.style.display = "none"
    header.style.display = "";
    brightness.style.display = "none"
    /* for(var i=0;sections.length>i;++i){
        sections[i].style.filter = "";
    } */
    })
}