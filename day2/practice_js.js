function changeBoxColor(color) {
    var box = document.getElementById('box');
    box.style.backgroundColor = color;
    box.style.width = "200px";
    box.innerHTML = "Voila!"
}

function updateHeading() {
    var inputText = document.getElementById('inputText').value;
    var mainHeading = document.getElementById('mainHeading');
    mainHeading.innerText = inputText;
}