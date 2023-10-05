let link = document.getElementById("links");
let open_i = document.getElementById("openicon");
let close_i = document.getElementById("closeicon");

document.getElementById("openicon").onclick = function(){
    link.style.display = "block";
    open_i.style.display = "none";
    close_i.style.display = "block"; 
}

document.getElementById("closeicon").onclick = function(){
    link.style.display = "none";
    open_i.style.display = "block";
    close_i.style.display = "none";

}