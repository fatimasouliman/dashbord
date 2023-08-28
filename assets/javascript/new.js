
const inputImg = document.getElementById("input-img");
const newImg = document.querySelector(".added-img");
const inputDate = document.getElementById("input-date");

// ------add main photo function------
inputImg.onchange = function () {
   newImg.classList.add("img-add");
   editBtn.classList.add("show");
   newImg.src = URL.createObjectURL(inputImg.files[0]);
   inputImg.classList.add("add-img-after-add");
}

//-----give the input date the current date------
inputDate.valueAsDate = new Date();