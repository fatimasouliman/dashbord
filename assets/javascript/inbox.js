const chatItems = document.querySelectorAll(".single-chat-container .single-chat");
const noConver = document.querySelector(".conver-container .no-conver");
const existConver = document.querySelector(".conver-container .exist-conver");
const span = document.querySelector(".inbox .hero-inbox .chats-box .first-box .circle-inbox")

chatItems.forEach(item => {
    item.addEventListener('click', () => {
        resetItems();
        item.classList.add('active');
        noConver.style = 'display: none'
        existConver.style = 'display: block';
        span.style = 'display: block';
    })
})

function resetItems() {
    chatItems.forEach(item => {
        item.classList.remove("active")
    })
}