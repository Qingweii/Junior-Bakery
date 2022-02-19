// Loading page to Home page
const duration = setTimeout(showHome,2000);

function showHome(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('about_us_page').style.display = 'block';
};

// Popup message for newly lauched product
window.addEventListener("load", function(){
    function open(){
        $('#msg_launched_container').fadeIn()
    }

    setTimeout(open, 3000)
});


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


// Show quick view page upon clicking quick view button
$('.quick').click(function(){
    document.getElementById('qck_container').style.display = 'block';
})

$('#close_q').click(function(){
    document.getElementById('qck_container').style.display = 'none';
    $('#overlay').remove();   // remove overlay after cancel btn
})

$('#close_l').click(function(){
    document.getElementById('msg_launched_container').style.display = 'none';
})

// to darken the background upon quick view button
function check(){
    $('<div/>',{
        id:"overlay"
    }).appendTo("body");  // append overlay to body
}


// Toggle button between 6-inch and 10-inch cake
var cost_pastry = document.getElementById('price_pastry');

$('.toggle_button').click(function(){
    if($(this).text() == '6-inch'){
        cost_pastry.innerText = '$58.00';

        ppl = ' ' + 'For Group of 8-12'
        $('#people').html(ppl)
    } else{
        cost_pastry.innerText = '$69.00';

        ppl = ' ' + 'For Group of 12-18'
        $('#people').html(ppl)
    }
});


$(function(){
    if($('body').is('.pie_car')){
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

    }
})


$(function(){
    if($('body').is('.cake_car')){
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

    }
})


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


// Slides show for review
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for ( var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);                          // to change to different slides every 2 seconds
}


