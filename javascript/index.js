function openSideNav(){
    var x = document.getElementById("left-bar");
    var y = document.getElementById("open-button");
    y.style.left = "0px"; 
    x.style.width = "250px";
    x.classList.add("col");
}

function closeSideNav(){
    var x = document.getElementById("left-bar");
    var y = document.getElementById("open-button");
    y.style.left = "10px";
    x.style.width = "0px";
    x.classList.remove("col");
}