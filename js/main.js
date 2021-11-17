// javascript file for web page
let liste = document.querySelectorAll("#formulaire input");
for (let i = 0; i < liste.length;i++) {
    liste[i].addEventListener('click',function (){
        liste[i].style.border = "1px solid blue";
    })

}