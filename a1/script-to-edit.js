const primaryTitleInput = document.getElementById('primary-title');
const secondaryTitleInput = document.getElementById('secondary-title');
const outputText1 = document.getElementById('text-1');
const outputText2 = document.getElementById('text-2');

primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);

function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

function selectImage(){
    let element = document.getElementById("dropdown").value;
    document.getElementById("imagebox").src = element;
}

const fontColorSelect = document.getElementById('font-color');

primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontColorSelect.addEventListener('change', updateFontColor);

function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

function updateFontColor() {
    const selectedColor = fontColorSelect.value;
    
    outputText1.style.color = selectedColor;
    outputText2.style.color = selectedColor;
}

const fontSizeRange = document.getElementById('font-size');

primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontSizeRange.addEventListener('input', updateFontSize);

function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

function updateFontSize() {
    const fontSize = fontSizeRange.value + 'px';
    
    outputText1.style.fontSize = fontSize;
    outputText2.style.fontSize = fontSize;
}

const fontCursive = document.getElementById('font-cursive');
const fontSerif = document.getElementById('font-serif');
const fontSansSerif = document.getElementById('font-sans-serif');

primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontCursive.addEventListener('change', updateFontFamily);
fontSerif.addEventListener('change', updateFontFamily);
fontSansSerif.addEventListener('change', updateFontFamily);

function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

function updateFontFamily() {
    let fontFamily = 'sans-serif';

    if (fontCursive.checked) {
        fontFamily = 'Impact';
    } else if (fontSerif.checked) {
        fontFamily = 'Comic Sans MS';
    }

    outputText1.style.fontFamily = fontFamily;
    outputText2.style.fontFamily = fontFamily;
}

function adjuststroke(){
    textsin = document.getElementById('stroker').value;
    tostroke = document.getElementById('text-1');
    tostroke.style.webkitTextStrokeWidth = textsin + "px";
    tostroke.style.webkitTextStrokeColor = "black";
}

const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupCover = document.getElementById("popupCover");

setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
  document.getElementById("save-img").addEventListener("click", function() {
    const imagebox = document.getElementById("imagebox");
    const isGif = imagebox.src.toLowerCase().endsWith(".gif");
    if (isGif) {
      const gifSrc = imagebox.src;
      simulateDownloadImageClick(gifSrc, 'Animated.gif');
    } else {
      html2canvas(document.getElementById('output-canvas')).then(function(canvas) {
        simulateDownloadImageClick(canvas.toDataURL(), 'GoodMorning.png');
      });
    }
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}