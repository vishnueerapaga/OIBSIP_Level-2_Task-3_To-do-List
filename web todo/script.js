var ip=document.getElementById("ip");
var list=document.getElementById("list");
function add()
{ if(ip.value===''){
    alert("write something")
}
else{
    let li=document.createElement("li");
     li.innerHTML=ip.value;
     list.appendChild(li);
     let span =document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);
}
ip.value="";
data();
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");  
        data();  
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        data();
    
    }
}, false);
function data()
{
 localStorage.setItem("data",list.innerHTML);

}
function dis()
{
    list.innerHTML=localStorage.getItem("data");
}
dis();