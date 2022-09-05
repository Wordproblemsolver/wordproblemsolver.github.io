window.onload = async ()=>{
    document.getElementById("hidemenu").addEventListener("click", function(e){
        document.getElementById("sidenav").style.width = 0;
        items = document.getElementsByClassName("menuitem");
        Array.from(items).forEach((i)=>{
            i.style.display ="none";
        })
    })
    document.getElementById("open").addEventListener("click",  function(e){
        document.getElementById("sidenav").style.width = "100px";
        items = document.getElementsByClassName("menuitem");
        Array.from(items).forEach((i)=>{
            i.style.display ="";
        })
    })
}