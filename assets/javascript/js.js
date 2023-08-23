

// calender---------------
const currentDate = document.querySelector(".current-date");
const daysTags = document.querySelector(".calender-days");
const prevnextIcon = document.querySelectorAll(".change pre img");
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const renderCalender = () => {
    let firstDateofMonth = new Date(currentYear , currentMonth , 1).getDay();
    let lastDateofMonth = new Date(currentYear , currentMonth + 1 , 0).getDate();
    let lastDayofMonth = new Date(currentYear , currentMonth , lastDateofMonth).getDay();
    let lastDateoflastMonth = new Date(currentYear , currentMonth , 0).getDate();
    let liTag = "";
console.log(new Date(currentYear , currentMonth , lastDateofMonth).getDay());
    for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class="none" >${lastDateoflastMonth - i + 1}</li>`;
        
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li>${i}</li>`;
        
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="none" >${i - lastDateoflastMonth + 1}</li>`;
        
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTags.innerHTML = liTag;
}
renderCalender();

prevnextIcon.forEach(icon => {
    icon.addEventListener("click" , () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        renderCalender();
    })
})

// give the calender the input date


// make the current date the defult value for the input
const inputDate = document.getElementById("input-date");
inputDate.valueAsDate= new Date();
const clear = document.querySelector(".close");
clear.addEventListener("click" , () => {
    inputDate.valueAsDate=null;
})

inputDate.addEventListener('change' , () => {
    currentDate.innerText = `${months[inputDate.valueAsDate.getMonth()]} ${inputDate.valueAsDate.getFullYear()}`;
    prevnextIcon.forEach(icon => {
        icon.addEventListener("click" , () => {
            currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
            renderCalender();
        })
    })
    
})




