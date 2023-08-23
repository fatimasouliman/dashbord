


//-----add group of photo and videos function------
const addPhoto = document.getElementById("input-photo");
const container = document.querySelector(".container");
const containerAdd = document.querySelector(".container .container-add");
const firstAddBtn = document.querySelector(".first-add-btn");
let newPhotoVideo = " "; 

addPhoto.addEventListener("change" , (event) => {

   addPhoto.classList.add("new-add");
   container.classList.add("show");
   firstAddBtn.classList.add("hidden");
   let type = addPhoto.files[0].type;
      if (type === "image/jpg" || "image/jpeg" || "image/png") {

      newPhotoVideo += `
      <div class="added-photo" >
         <img class="photo" src=${URL.createObjectURL(addPhoto.files[0])} >
         <div class="trash" >
            <img class="delet" src="./assets/images/bag.png" >
         </div>
      </div>
      `;

   } else {

      newPhotoVideo += `
      <div class="added-photo" >
         <iframe class="photo" src=${URL.createObjectURL(item)} ></iframe>
         <div class="trash" >
            <img class="delet" src="./assets/images/bag.png" >
         </div>
      </div>
      `;    

   }   
   containerAdd.innerHTML = newPhotoVideo;
//delet image function--------------
   const deletImg = document.querySelector(".added-photo .trash .delet");
   deletImg.addEventListener("click" , (eventdel) => {
      eventdel.parentElement.parentElement.remove();
      event.target.value = null;
      localStorage.clear();
      console.log(event.target.value);
   })
   })

   const inputImg = document.getElementById("input-img");
const newImg = document.querySelector(".added-img");
const inputDate = document.getElementById("input-date");
 
// ------add photo function------
inputImg.onchange = function (){
   newImg.classList.add("img-add");
   newImg.src = URL.createObjectURL(inputImg.files[0]);
   console.log(inputImg.files);   
}

//-----give the input date the current date------
inputDate.valueAsDate = new Date();