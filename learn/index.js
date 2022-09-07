

window.onload = async ()=>{
    document.getElementById("page").style.display="none";
    v = setTimeout(()=>{
        document.getElementById("loader").style.display="none";
        document.getElementById("page").style.display = "";
    },1000)
    
    document.getElementById("sidenav").style.width = 0;
        items = document.getElementsByClassName("menuitem");
        Array.from(items).forEach((i)=>{
            i.style.display ="none";
    })


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
    document.getElementById("learn").addEventListener("click",(e)=>{
        document.getElementById("learncontainer").style.display = "";
    })
}