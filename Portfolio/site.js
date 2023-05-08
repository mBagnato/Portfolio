const mainBackground = document.querySelector('#mainBackground');
const backgroundHeader = document.querySelector('#backgroundHeading');

mainBackground.addEventListener('mouseover', () => {
    backgroundHeader.style.transition = "5s"
    backgroundHeader.style.opacity = "0.9";
});