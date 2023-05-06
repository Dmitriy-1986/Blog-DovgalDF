const mainContent = document.querySelector('#mainContent');
const btnDown = document.querySelector('#btnDown');

function handleButtonClick() {
    mainContent.scrollIntoView({ block: "start", behavior: "smooth" });
}

btnDown.addEventListener('click', handleButtonClick);
