img_image="";
canvas=document.getElementById("canvasP84");
ctx=canvas.getContext("2d");
window.addEventListener("keydown",my_keydown);
abecedario_img="alfabeto.png";
numero_img="numeros.png";
flechas_img="flechas.png";
especial_img="alt.png";
otros_img="otros.png";
function my_keydown(e){
    keyPressed=e.keyCode;
    if((keyPressed >=97 && keyPressed<=122)||(keyPressed >=65 && keyPressed<=90)){
      alfabeto();
      document.getElementById("answer").innerHTML="Tu presionaste una letra";
    }
    if(keyPressed >=48 && keyPressed<=57){
        numero();
        document.getElementById("answer").innerHTML="Tu presionaste un numero";}
        
    
    if((keyPressed >=97 && keyPressed<=122)||(keyPressed >=65 && keyPressed<=90)||(keyPressed >=48 && keyPressed<=57)||(keyPressed >=37 && keyPressed<=40)||(keyPressed >=17 && keyPressed <=18)||(keyPressed==27)){
        document.getElementById("click").innerHTML=keyPressed;
    }   else{
        otros();
        document.getElementById("answer").innerHTML="Tu presionaste  otra tecla";
        document.getElementById("click").innerHTML=keyPressed;
    }


  
  
 
 if(keyPressed >=37 && keyPressed<=40){
    flechas();
    document.getElementById("answer").innerHTML="Tu presionaste una flecha";}



if((keyPressed >=17 && keyPressed <=18)||(keyPressed==27)){
    especial();
    document.getElementById("answer").innerHTML="Tu presionaste una tecla especial";

}}
function uploadothers(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(otro_imgTag,200,200,500,500);

}
function addotro(){
    otro_imgTag=new Image();
    otro_imgTag.onload= uploadothers;
    otro_imgTag.src=img_image;
    
   
}
function otros(){

    img_image="otros.png";
    addotro();
}
function uploadEspecialidades(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(especial_imgTag,200,200,500,500);

}
function addspecial(){
    especial_imgTag=new Image();
    especial_imgTag.onload= uploadEspecialidades;
    especial_imgTag.src=img_image;
   
}
function especial(){

    img_image="alt.png";
    addspecial();
}
function uploadFlechas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(flechas_imgTag,200,200,500,500);

}
function addlugar(){
    flechas_imgTag=new Image();
    flechas_imgTag.onload= uploadFlechas;
    flechas_imgTag.src=img_image;
   
}

function flechas(){

    img_image="flechas.png";
    addlugar();
}
function numero(){

    img_image="numeros.png";
    addnum();
}
function alfabeto(){

    img_image="alfabeto.png";
    add();
}
function addnum(){
    numero_imgTag=new Image();
    numero_imgTag.onload= uploadNumeros;
    numero_imgTag.src=img_image;
}
function add(){
    abecedario_imgTag=new Image();
    abecedario_imgTag.onload= uploadAbecedario;
    abecedario_imgTag.src=img_image;
}
function uploadAbecedario(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(abecedario_imgTag,200,200,500,500);

}
function uploadNumeros(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(numero_imgTag,200,200,500,500);}
 
