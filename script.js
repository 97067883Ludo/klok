function klok() {
    const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
document.getElementById("klok").innerHTML = h + ':' + m + ':' + s;
    timer();
}
function timer() {
setTimeout(() => {
    klok();
}, 100);
}