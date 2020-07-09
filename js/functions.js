const inputFontSize = document.querySelector('#opt-fontsize');
// vars
const selectFontFamily = document.querySelector('#opt-fontfamily');
const inputOffsetY = document.querySelector('#opt-offsety');
const cardBg = document.querySelector('.card__bg');
const colorEl = document.querySelector('.color');
const titleEl = document.querySelector('.card__title');

function changeFontFamily() {
    if(selectFontFamily.value == "empires"){
      titleEl.style.fontFamily = "Empires";
    } else if (selectFontFamily.value == "jacksilver") {
      titleEl.style.fontFamily = "Jacksilver";
    } else if (selectFontFamily.value == "a-dripping-marker") {
      titleEl.style.fontFamily = "A Dripping Marker";
    }
}

inputFontSize.addEventListener('change', (event) => {
  titleEl.style.fontSize = inputFontSize.value + "px";
});

inputOffsetY.addEventListener('change', (event) => {
  titleEl.style.top = inputOffsetY.value + "px";
  console.log(inputOffsetY.value);
  // test change
});

colorEl.addEventListener('click', (event) => {
  switch (colorEl) {
    case "color-red":
      cardBg.style.background = "1e61f9"
    case "color-blue":
      cardBg.style.background = "1e61f9"
    default:
  }

});




// When input is changed
// Get value from input
// Set title to have as font size the input value