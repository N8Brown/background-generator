var body = document.getElementById('background'),
    gradientType = document.querySelector('#gradient-type'),
    colorQuantity = document.querySelector('#color-quantity'),
    colors = document.querySelectorAll('input[type=color]')
    color1 = document.querySelector('#color1'),
    color2 = document.querySelector('#color2'),
    color3 = document.querySelector('#color3'),
    color4 = document.querySelector('#color4');


function getCurrent(){
    var current = gradientType.value;
    console.log(current);
} 


// function getCurrentColorQuantity(){
//     var current = colorQuantity.value;

//     for (x=0; x<colors.length; x++){
//         colors[x].disabled = true;
//     }

//     for (i=0; i<current; i++){
//         colors[i].disabled = false;
//     }
//     console.log(current);
// }

function getCurrentColorQuantity(){
    var current = colorQuantity.value;

    for (x=0; x<colors.length; x++){
        colors[x].style.visibility = 'hidden';
    }

    for (i=0; i<current; i++){
        colors[i].style.visibility = 'visible';
    }
    console.log(current);
}


var myGradType = gradientType.addEventListener('change', getCurrent),
    myColorQuantity = colorQuantity.addEventListener('change', getCurrentColorQuantity);


console.log(myGradType);
console.log(myColorQuantity);