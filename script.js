var body = document.getElementById('background'),
    gradientType = document.querySelector('#gradient-type'),
    direction = document.querySelector('#gradient-direction'),
    shape = document.querySelector('#gradient-shape'),
    directionGroup = document.getElementById('direction'),
    shapeGroup = document.getElementById('shape'),
    colorQuantity = document.querySelector('#color-quantity'),
    colors = document.querySelectorAll('input[type=color]'),
    code = document.getElementById('code'),
    myColorIDs = [],
    myColorValues = [],
    myColorString = "",
    myGradient = "",
    myDirection = "",
    myColorQuantity = "",
    myShape = "";

document.addEventListener('DOMContentLoaded', generateBackground);
gradientType.addEventListener('change', generateBackground);
direction.addEventListener('change', generateBackground);
shape.addEventListener('change', generateBackground);
colorQuantity.addEventListener('change', generateBackground);


for (i=0; i<colors.length; i++){
    colors[i].addEventListener('input', generateBackground);
}

function generateBackground(){
    myGradient = gradientType.value;
    myDirection = direction.value + ", ";
    myShape = shape.value + ", ";
    myColorQuantity = colorQuantity.value;
    myColorValues = [];

    for (x=0; x<colors.length; x++){
        colors[x].style.visibility = 'hidden';
    }

    for (i=0; i<myColorQuantity; i++){
        colors[i].style.visibility = 'visible';
        myColorValues.push(colors[i].value);
    }

    myColorString = myColorValues.join(', ');

    if (myGradient === "linear-gradient" || myGradient === "repeating-linear-gradient"){
        directionGroup.classList.remove('hidden');
        directionGroup.classList.add('split-box');
        shapeGroup.classList.add('hidden');
        shapeGroup.classList.remove('split-box');
        body.style.background = myGradient + "(" + myDirection + myColorString + ")";
        code.textContent = "background: " + body.style.background + ";";
    }
    else if (myGradient === "radial-gradient" || myGradient === "repeating-radial-gradient"){
        shapeGroup.classList.remove('hidden');
        shapeGroup.classList.add('split-box');
        directionGroup.classList.add('hidden');
        directionGroup.classList.remove('split-box');
        if (shape.value === "default"){
            body.style.background = myGradient + "(" + myColorString + ")";
            code.textContent = "background: " + body.style.background + ";";
        }
        else {
            body.style.background = myGradient + "(" + myShape + myColorString + ")";
            code.textContent = "background: " + body.style.background + ";";
        }
    }
}