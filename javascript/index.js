function openSideNav(){
    var sideBar = document.getElementById("left-bar");
    var openB = document.getElementById("open-button");
    var mainSection = document.getElementById("mid-bar");
    var rightSection = document.getElementById("right-bar");
    openB.style.left = "0px"; 
    sideBar.style.width = "250px";
    sideBar.classList.add("col");
    mainSection.classList.remove("col-8");
    mainSection.classList.add("col-6");
}

function closeSideNav(){
    var sideBar = document.getElementById("left-bar");
    var closeB = document.getElementById("open-button");
    var mainSection = document.getElementById("mid-bar");
    var rightSection = document.getElementById("right-bar");
    closeB.style.left = "10px";
    sideBar.style.width = "0px";
    sideBar.classList.remove("col");
    mainSection.classList.remove("col-6");
    mainSection.classList.add("col-8");
}