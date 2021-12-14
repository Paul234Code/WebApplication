// javascript file for web page
let liste = document.querySelectorAll("#formulaire input");
for (let i = 0; i < liste.length;i++) {
    liste[i].addEventListener('focus',function (){
        liste[i].style.border = "2px solid #1E90FF";
    })

}
let label1 =  document.getElementById("label1");
label12 = document.createElement('label');
label12.textContent = "-";
label12.style.size = "15px"
label12.style.color = "#f1f1f1";
label12.style.width = "20px";
let para1 = document.getElementById("para1");
let  text = document.createTextNode("If the design work in your mind it works in your heart");
let paragraph = document.createElement('p');
paragraph.appendChild(text);
label1.addEventListener('click',function () {
    para1.innerHTML = paragraph.innerHTML;
    label1.textContent = label12.textContent;
});
