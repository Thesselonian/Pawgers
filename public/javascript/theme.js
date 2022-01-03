
var icon = document.getElementById('icon');

if(localStorage.getItem('theme')=="darkmode"){
    document.body.classList.toggle("darkmode");
    icon.src = "/images/sun.png";
}
// toggles darkmode
icon.onclick = function () {
    localStorage.setItem("theme","darkmode");
    var drk = document.body.classList
    document.body.classList.toggle("darkmode");
    console.log(drk);
    if(document.body.classList[0] == "adoption-body"){
        if(document.body.classList == drk[1]){
            icon.src = "/images/sun.png";
            console.log('darkmode active');
        }
    } 
    else if (document.body.classList == drk[0]) {
        icon.src = "/images/sun.png";
        console.log('darkmode active');
    }
    else {
        icon.src = "/images/moon.png"
        console.log('darkmode deactive');
        localStorage.removeItem('theme')
    }
}
