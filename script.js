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
    return false;
};


// Toggle button between 6-inch and 10-inch cake
var cost_pastry = document.getElementById('price_pastry');

$('.toggle_button').click(function(){
    if($(this).text() == '6-inch'){
        cost_pastry.innerText = '$58.00';
    } else{
        cost_pastry.innerText = '$69.00';
    }
});




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
        setTimeout(function(){quantity.style.color='black'},500);
    } else{
        quantity.style.color = 'black';
    }
};

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
};




// Carousel (Viewing Pastry)
let slidePosition = 0;
const slide = document.getElementsByClassName('image');
const totalSlide = slide.length;

document.getElementById('next').addEventListener('click',function(){
    movetoNextSlide();
});

document.getElementById('prev').addEventListener('click',function(){
    movetoPrevSlide();
});

function updateSlidePosition(){
    
    for (let move of slide){
        move.classList.remove('image--visible');
        move.classList.add('image--hidden');
    }

    slide[slidePosition].classList.add('image--visible');
}


function movetoNextSlide() {

    if (slidePosition === totalSlide -1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }

    updateSlidePosition();
};

function movetoPrevSlide(){

    if (slidePosition === 0){
        slidePosition = totalSlide -1;
    } else{
        slidePosition--;
    }

    updateSlidePosition();
};




// Add to cart page
$(document).ready(function(){
    
    const APIKEY = '61fe62826a791555010217e9';

    $('#add_to_cart_button').on('click', function(e){

        e.preventDefault();
        
        // Retrieve the data from selected pastry
        let pastryName = document.getElementById('name_pastry').innerText;
        var cost = document.getElementById('price_pastry').innerText.replace('$','');
        let pastryNum = document.getElementById('number').innerText;
        let pastryImg = document.getElementById('image').getAttribute('src');
        let pastryPrice = Number(cost) * Number(pastryNum);
        let origPrice = document.getElementById('price_pastry').innerText.replace('$','');
        

        // Get pastry info when user click add to cart
        let jsondata = {
            'image': pastryImg,
            'name': pastryName,
            'price': pastryPrice,
            'quantity': pastryNum,
            'orig': origPrice,
        };

        // Create AJAX settings
        var settings = {
            'async': true,
            "crossDomain": true,
            "url": 'https://pastries-5f62.restdb.io/rest/pastry',
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": '61fe62826a791555010217e9',
                "cache-control": "no-cache",
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
        }

        // Send ajax request to restDB 
        $.ajax(settings).done(function (response) {
            console.log(response); // print out the selected pastry data

            alert('Successfully added to cart!')
        });

    });


});
