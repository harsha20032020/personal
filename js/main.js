function change_image() {
    var x = document.getElementById('scrollfn')
    var str = document.getElementById('scrollfn').src;
    if (str.includes("1.jpg")) {
        x.src = "../img/2.JPG";
    } else if (str.includes("2.JPG")) {
        x.src = "../img/3.JPG";
    } else if (str.includes("3.JPG")) {
        x.src = "../img/4.JPG";
    } else if (str.includes("4.JPG")) {
        x.src = "../img/5.JPG";
    } else if (str.includes("5.JPG")) {
        x.src = "../img/1.jpg";
    } else {
        x.src = "";
    }
}