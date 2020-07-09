// vars
var selectFontFamily = document.querySelector('#opt-fontfamily');
var inputFontSize = document.querySelector('#opt-fontsize');
var inputOffsetY = document.querySelector('#opt-offset-y');
var inputOffsetX = document.querySelector('#opt-offset-x');
var inputRotate = document.querySelector('#opt-rotate');
var inputChangeText = document.querySelector('#change-text');
var inputLetterSpacing = document.querySelector('#letter-spacing');

var titleEl = document.querySelector('.card__title');
var cardBg = document.querySelectorAll('.card__bg');
var cardText = document.getElementById('card-text');

var stringFontSize = document.querySelector('.string-font-size');
var stringOffsetY = document.querySelector('.string-offset-y');
var stringOffsetX = document.querySelector('.string-offset-x');
var stringRotate = document.querySelector('.string-rotate');
var stringLetterSpacing = document.querySelector('.string-letter-spacing');

// Change Font Family
function changeFontFamily() {
  if (selectFontFamily.value == 'jacksilver') {
    titleEl.style.fontFamily = 'Jacksilver';
  } else if (selectFontFamily.value == 'a-dripping-marker') {
    titleEl.style.fontFamily = 'A Dripping Marker';
  } else if (selectFontFamily.value == 'street-wars') {
    titleEl.style.fontFamily = 'Street Wars';
  } else if (selectFontFamily.value == 'marsneveneksk') {
    titleEl.style.fontFamily = 'Marsneveneksk';
  } else if (selectFontFamily.value == 'don-graffiti') {
    titleEl.style.fontFamily = 'Don Graffiti';
  } else if (selectFontFamily.value == 'the-gunslinger') {
    titleEl.style.fontFamily = 'The Gunslinger';
  } else if (selectFontFamily.value == 'aftershock') {
    titleEl.style.fontFamily = 'Aftershock';
  } else if (selectFontFamily.value == 'fat-wandals') {
    titleEl.style.fontFamily = 'Fat Wandals';
  }
}

// Change Font Size
inputFontSize.addEventListener('change', (event) => {
  titleEl.style.fontSize = inputFontSize.value + 'px';
  stringFontSize.textContent = inputFontSize.value + ' px';
});

// Change OffsetY
inputOffsetY.addEventListener('change', (event) => {
  titleEl.style.top = inputOffsetY.value + 'px';
  stringOffsetY.textContent = inputOffsetY.value + ' px';
});

// Change OffsetX
inputOffsetX.addEventListener('change', (event) => {
  titleEl.style.left = inputOffsetX.value + 'px';
  stringOffsetX.textContent = inputOffsetX.value + ' px';
});

// Change Rotation
inputRotate.addEventListener('change', (event) => {
  titleEl.style.transform = 'rotate(' + inputRotate.value + 'deg)';
  stringRotate.textContent = inputRotate.value + ' deg';
});

// Change LetterSpacing
inputLetterSpacing.addEventListener('change', (event) => {
  titleEl.style.letterSpacing = inputLetterSpacing.value + 'px';
  stringLetterSpacing.textContent = inputLetterSpacing.value + ' px';
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

// Change Text Function
function updateValue() {
  cardText.textContent = inputChangeText.value;
}