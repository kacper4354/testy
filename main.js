var show = 1
var lang = 1
function lan() {
    if(lang&2==1) {

    } else if (lang%2==0) {

    } else {

    }
    lang++
}
function showlan() {
    if(show%2==1) {
        document.getElementById("dropdown-menu").style.display = "block"
    } else {
        document.getElementById("dropdown-menu").style.display = "none"
    }
    console.log(show)
    show++
}