food_array=["Cheese Pizza","Pepperoni Pizza","Veggie Pizza","Mac n' Cheese Pizzas","Freadbear Special"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    food_array.sort();
    for(var i=0;i<food_array.length;i++){
        htmldata=htmldata+'<li>'+food_array[i]+'<li>'
    }
    htmldata=htmldata+"<ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    food_array.push(item);
    food_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<food_array.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png">'+ food_array[i]+ '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;

}