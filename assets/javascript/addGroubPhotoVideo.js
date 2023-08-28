


//-----add group of photo and videos function------
const addPhoto = document.getElementById("input-photo");
const container = document.querySelector(".container");
const containerAdd = document.querySelector(".container .container-add");
const firstAddBtn = document.querySelector(".first-add-btn");
const editBtn = document.querySelector(".edit");

addPhoto.addEventListener("change", () => {
    console.log("change");
    addPhoto.classList.contains("new-add")?  null : addPhoto.classList.add("new-add");
    container.classList.add("show");
    firstAddBtn? firstAddBtn.classList.add("hidden") : null;
   

   let type = addPhoto.files[0].type;
   const addedPhoto = document.createElement('div');
   addedPhoto.classList.add("added-photo");
   const trash = document.createElement('div');
   trash.classList.add("trash");
   const imgTrash = document.createElement('img');
   imgTrash.src = "./assets/images/bag.png";
   imgTrash.classList.add('delet');
   trash.appendChild(imgTrash);

   if (type === "image/jpg" || "image/jpeg" || "image/png") {

      const element = document.createElement('img');
      element.classList.add("photo")
      element.src = `${URL.createObjectURL(addPhoto.files[0])}`;
      addedPhoto.appendChild(element);

   } else {

      const element = document.createElement('video');
      element.classList.add("photo");
      const elementSrc = document.createElement('source');
      elementSrc.src = `${URL.createObjectURL(addPhoto.files[0])}`;
      element.appendChild(elementSrc);
      addedPhoto.appendChild(element);
      
   }
   //delet image function--------------
   addedPhoto.appendChild(trash);
   containerAdd.appendChild(addedPhoto);
   const deletImg = document.querySelectorAll(".added-photo .trash .delet");
   const elemnets = document.querySelectorAll(".added-photo");
   for (let i = 0; i < deletImg.length; i++) {
      // console.log(deletImg);
      deletImg[i].addEventListener("click", () => {
         console.log(elemnets[i]);
         containerAdd.removeChild(elemnets[i]);
      })
   }
});