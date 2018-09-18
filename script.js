var body = document.getElementById('background'),
    gradientType = document.querySelector('#gradient-type'),
    direction = document.querySelector('#gradient-direction'),
    shape = document.querySelector('#gradient-shape'),
    directionGroup = document.getElementsByClassName('direction'),
    shapeGroup = document.getElementsByClassName('shape'),
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
    }

    for (i=0; i<myColorQuantity; i++){
        myColorValues.push(colors[i].value);
    }
    myColorString = myColorValues.join(', ');

    if (myGradient === "linear-gradient" || myGradient === "repeating-linear-gradient"){
        for (i=0; i<directionGroup.length; i++){
            directionGroup[i].style.display = 'inline';
        }
        for (i=0; i<shapeGroup.length; i++){
            shapeGroup[i].style.display = 'none';
        }

        body.style.background = myGradient + "(" + myDirection + myColorString + ")";
        code.textContent = "background: " + body.style.background + ";";
    }
    else if (myGradient === "radial-gradient" || myGradient === "repeating-radial-gradient"){
        for (i=0; i<shapeGroup.length; i++){
            shapeGroup[i].style.display = 'inline';
        }
        for (i=0; i<directionGroup.length; i++){
            directionGroup[i].style.display = 'none';
        }
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