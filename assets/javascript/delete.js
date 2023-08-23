const del = document.querySelectorAll(".icons .del-article");
const divDelet = document.querySelector(".div-popup-delet");
const deletA = document.querySelector(".div-popup-delet .popup-delet .delet-btns .delet");

// delet function-----------------
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click" , (event) => {
        divDelet.classList.add("show");
        deletA.addEventListener("click" , () => {
            let child = event;
            child.target.parentNode.parentNode.parentNode.parentNode.remove();
            divDelet.classList.remove("show");
        })
    })
    
}
const cancelDel = document.querySelector(".div-popup-delet .popup-delet .delet-btns .cancel");
cancelDel.addEventListener("click" , () => {
    divDelet.classList.remove("show");
})