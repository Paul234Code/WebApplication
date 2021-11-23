// javascript file for web page
let liste = document.querySelectorAll("#formulaire input");
for (let i = 0; i < liste.length;i++) {
    liste[i].addEventListener('focus',function (){
        liste[i].style.border = "2px solid #1E90FF";
    })

}