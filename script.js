// Loading page to Home page
const duration = setTimeout(showHome,2000);

function showHome(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('about_us_page').style.display = 'block';
 };


 // Popup message at navigation bar
function popupFunction(){
    var pop = document.getElementById('popup');
    pop.classList.toggle('show');
 }


// Footer section (birthday submission)

function bday(){
    alert('Your birthday is on its way, We\'ll be counting down to your special day ;)');
};



//Plus and Minus button for quantity value (Add to cart page)
var minusbtn = document.getElementById('minus');
var plusbtn = document.getElementById('plus');
var quantity = document.getElementById('number');

number = 1;  // Number value
min = 1;    // Minimum value
max = 10;  // Maximum value

minusbtn.onclick = function(){
    if (number > min){
        number = number - 1;
        quantity.innerText = number;  // Display value of the number
    }

    if (number == min){
        quantity.style.color = 'red';
        setTimeout(function(){quantity.style.color='black'},500)
    } else{
        quantity.style.color = 'black';
    }
}

plusbtn.onclick = function(){
    if (number < max){
        number = number + 1;
        quantity.innerText = number;  // Display value of the number
    }

    if (number == max){
        quantity.style.color = 'red';
        setTimeout(function(){quantity.style.color='black'},500)
    } else{
        quantity.style.color = 'black';
    }
}


