
function move(){
    let id = null;
    const elem = document.getElementById("rectangle");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if (pos == 350) {
            clearInterval(id);
        }else{
            pos++;
            elem.style.left = pos + "px";
        }
    }
}