var inputFontSize = document.querySelector('#opt-fontsize');
// vars
var selectFontFamily = document.querySelector('#opt-fontfamily');
var inputOffsetY = document.querySelector('#opt-offsety');
var cardBg = document.querySelectorAll('.card__bg');
var colorEl = document.querySelector('.colors__inner > span');
var titleEl = document.querySelector('.card__title');

// Change Font Family
function changeFontFamily() {
  if(selectFontFamily.value == "empires"){
    titleEl.style.fontFamily = "Empires";
  } else if (selectFontFamily.value == "jacksilver") {
    titleEl.style.fontFamily = "Jacksilver";
  } else if (selectFontFamily.value == "a-dripping-marker") {
    titleEl.style.fontFamily = "A Dripping Marker";
  }
}

// Change Font Size
inputFontSize.addEventListener('change', (event) => {
  titleEl.style.fontSize = inputFontSize.value + "px";
});

// Change OffsetY
inputOffsetY.addEventListener('change', (event) => {
  titleEl.style.top = inputOffsetY.value + "px";
  console.log(inputOffsetY.value);
  // test change
});

// Change Card BG Color
function changeCardBG(bgColor) {
  for (var i = 0; i < cardBg.length; i++) {
    var currentEl = cardBg[i];
    currentEl.style.background = bgColor;
  }
}

// Add active class to clicked element
var colorsInner = document.getElementById('colors-inner');
var colors = colorsInner.getElementsByClassName('color');

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', function() {
  var current = document.getElementsByClassName('active');
  current[0].className = current[0].className.replace(' active', '');
  this.className += ' active';
  });
}

// When input is changed
// Get value from input
// Set title to have as font size the input value