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
        let pastryPrice = document.getElementById('price_pastry').innerText;
        let pastryNum = document.getElementById('number').innerText;


        // Get pastry info when user click add to cart
        let jsondata = {
            'name': pastryName,
            'price': pastryPrice,
            'quantity': pastryNum,
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
            
            unique = `${response._id}`

            getPastry();
        });


        // to retrieve the data from the database
        function getPastry(limit = 10, all = true){

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://pastries-5f62.restdb.io/rest/pastry",
                "method": "GET",
                "headers": {
                "content-type": "application/json",
                "x-apikey": "61fe62826a791555010217e9",
                "cache-control": "no-cache"
                },
            }

            $.ajax(settings).done(function (response) {
                console.log(response);

                let order = '';

                for (var i = 0; i <response.length; i ++){

                    if (unique == `${response[i]._id}`){ //to identify the selected quantity despite so many data

                        order = `${order}<tr id='${response[i]._id}'><td>${response[i].name}</td><td>${response[i].price}</td><td>${response[i].quantity}</td></tr>`
                    }
                }

                //console.log(order);
                sessionStorage.setItem('list',order)
                //console.log(sessionStorage)
                
            });

            //console.log(sessionStorage)
        }
        
    });


});
