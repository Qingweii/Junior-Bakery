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


// Displaying and caculating the Timer
const startingMinutes = 15;
let time = startingMinutes * 60;  // to get all the seconds

const countdown = document.getElementById('countdown');


// Start timer when onclick the start button
function start(){
    setInterval(updateCountdown, 1000);  // 1 second interval

    function updateCountdown(){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 15 ? '0' + seconds : seconds;  // to adjust a glitch for the '0' in the beginning 

        countdown.innerHTML = `${minutes} : ${seconds}`;
        time --;

        timecompleted(minutes, seconds);
    }

}


// Random generator
var generatorbox = document.getElementById('pastry_name')
var data = ['Lemon of my eye','Once In the Red Moon','King Cat of the Mountain','Sweet and Smoky Taffy','King of Hearts','Maneki Neko','Mad Eclipse','Hazel Jade']

function random_generator(){
    generatorbox.innerHTML = data[Math.floor(Math.random()*data.length)];
}



// Submission of answer for Quest
function ans(){
    alert('Your answer has been sent. You will be notified via email if you made it to the Top 3. Good Luck!');
    return false;
}


// Submission of answer for Q&A
function share(){
    return false;
}


// hiding quest before start button is clicked
var game = document.getElementById('quest');

function appear(){
    game.style.display = 'block';
    start();
}


// Showing how much time you have completed for this Quest + item that user have generated
function timecompleted(minutes, seconds){
    var min_left = Number(startingMinutes-1) - Number(minutes);  // to find the minute upon clicking the submit button
    var sec_left = 60 - Number(seconds);              // to find the seconds upon clicking the submit button
    var item = document.getElementById('pastry_name').innerHTML;
    var count = document.getElementById('pp').innerText;
    total = Number(count) + 50;   // Update points when user comment on Q&A

    var y = 'Time completed' + ':' + " " + min_left + " " + 'mins' + " " + sec_left + " " +'secs';
    var c = 'Item' + ':' + " " + '"'+ item +'"';

    $('#submit_btn').click(function(){
        $(this).data('clicked',true);
        $('.completion').html(y);                   // to print out the time taken
        $('.item').html(c);                      // to print out the intitial item they have generated
        $('#pp').html(total)
    })
    return false;
}


// user input will be shown on Q and A session
function getInput(){
    var comment = document.getElementById('myinput').value;
    you = '-' + 'you';
    var count = document.getElementById('pp').innerText;
    total = Number(count) + 30;   // Update points when user comment on Q&A

    $('#your_comment').html(comment);
    $('.rightt').html(you);
    $('#pp').html(total)
}



// Voting up
function voteup(){
    var votes = document.getElementById('voters').innerText;
    new_vote = Number(votes) + 1

    $('#voters').html(new_vote)
}


// Voting down
function votedown(){
    var votes = document.getElementById('voters').innerText;
    new_vote = Number(votes) - 1;

    $('#voters').html(new_vote)
}



// Clickable dropdown menu for (share button) (Q&A)
function give(){
    document.getElementById('dropdown').classList.toggle('show');
}

// Copy to clickboard 
function link(){
    var copylink = document.getElementById('topic').innerText;
    navigator.clipboard.writeText(copylink)

    alert('Copied to Clipboard!')
}

// Add to bookmark 
function color(){
    var bookmark = document.getElementById('save');
    bookmark.style.color = '#4e2819';
}


// Contact page section (submission of contact form)
function submition(){
    alert('Successfully sent. Thank You for reaching out to us!');
    return false;
}


// Card Number formatting




// Getting the items to view for order page when user click add to cart
$(document).ready(function(){

    const APIKEY = '61fe62826a791555010217e9';

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
        //console.log(response);

        let order = '';
        let money = 0;

        for (var i = 0; i <response.length; i ++){

            order = `${order}<tr id='${response[i]._id}'><td><img src = '${response[i].image}' width = '140' height = '150' style='object-fit: cover;'></td><td>${response[i].name}<br>$${response[i].orig}</td><td id='cost'>$${response[i].price}</td>
            <td id='quantity'><button id="minus_q" data-quantity='${response[i].quantity}' data-id='${response[i]._id}' data-orig='${response[i].orig}'>-</button><div id = 'quantity_element'>${response[i].quantity}</div><button id="plus_q" data-quantity='${response[i].quantity}' data-id='${response[i]._id}' data-orig='${response[i].orig}'>+</button></td>
            <td><a href='#delete-container' class='delete' data-id='${response[i]._id}' data-cost='${response[i].price}'><i class="fas fa-times fa-2x" style='color: red;'></i></a></td></tr>`;

            money = money + Number(`${response[i].price}`); // Add the total price for pastry
        }

        $('#order_list tbody').html(order); // Get items from database to innerHTML body
        $('.cart-total-price').html(money);
        
        $('.cart-total-price-get').html(money);
        var tax = document.getElementById('shipping_fee').innerText;
        var with_tax = Number(tax) + Number(money);

        $('#final_amt').html(with_tax);
    });




    // When minus button is clicked to update quantity
    $('#order_list tbody').on('click', '#minus_q', function(){

        let q_id = $(this).data('id');  // to identify the ID for which pastry is selected 
        let pastrycosts = $(this).data('orig'); // To get the cost 

        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        min = 1;

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                var x = unique[i].querySelector('#quantity_element');  // to identify the quantity for that selected pastry
                var y = unique[i].querySelector('#cost');
                var latest_quantity = Number(x.innerHTML);

                if(latest_quantity > min){
                    latest_quantity = latest_quantity - 1;
                    x.innerText = latest_quantity;         // to display the quantity when decreased on the html

                } else{    // to indicate that it has reach the Minimum
                    var numm = unique[i].querySelector('#quantity_element');
                    numm.style.color = 'red';
                    setTimeout(function(){numm.style.color='black'},500)
                }
            }
        }

        var t = document.querySelectorAll('#cost');
        other_prices = 0;

        for (var b = 0; b < t.length; b ++){
            if(t[b] != y){                                     // t[b] gets the other prices
                var price = t[b].innerHTML.replace('$','');   // to only get the value of other prices
                other_prices = other_prices + Number(price);  // to add up all the other prices
            }
        }
        

        newest_cost = Number(pastrycosts) * Number(latest_quantity);   // to get the value after quantity value change by multiplying the changed quantity
        y.innerText = '$' + newest_cost;
        var difference = Number(newest_cost) + Number(other_prices);    // to add the other prices with the changed value 

        $('.cart-total-price').html(difference);                        // To print out the latest cost
        
        $('.cart-total-price-get').html(difference);                    // Update Payment page
        var tax = document.getElementById('shipping_fee').innerText;
        var with_tax = Number(tax) + Number(difference);

        $('#final_amt').html(with_tax);

        updatePastry(q_id, newest_cost, latest_quantity)
    });




    // When plus button is clicked to update quantity
    $('#order_list tbody').on('click', '#plus_q', function(){

        let q_id = $(this).data('id');              // to identify the ID for which pastry is selected 
        let pastrycosts = $(this).data('orig');     // To get the original cost

        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        max = 10

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                var x = unique[i].querySelector('#quantity_element');  // to identify the quantity for that selected pastry
                var y = unique[i].querySelector('#cost');
                var latest_quantity = Number(x.innerHTML);

                if(latest_quantity < max){
                    latest_quantity = latest_quantity + 1;
                    x.innerText = latest_quantity;     // to display the quantity when increased on the html

                } else{    // to indicate that it has reach the Maximum
                    var numm = unique[i].querySelector('#quantity_element');
                    numm.style.color = 'red';
                    setTimeout(function(){numm.style.color='black'},500)
                }
            }
        }

        var t = document.querySelectorAll('#cost');
        other_prices = 0;

        for (var b = 0; b < t.length; b ++){
            if(t[b] != y){                                       // t[b] gets the other prices
                var price = t[b].innerHTML.replace('$','');     // to only get the value of other prices
                other_prices = other_prices + Number(price);   // to add up all the other prices
            }
        }

        newest_cost = Number(pastrycosts) * Number(latest_quantity);   // to get the value after quantity value change by multiplying the changed quantity
        y.innerText = '$' + newest_cost;
        var difference = Number(newest_cost) - Number($('.cart-total-price').html());   // To find the differences between the total and the changed value 
        var add = Number($('.cart-total-price').html()) + Number(difference) + Number(other_prices);   // add all together

        $('.cart-total-price').html(add);                      // To print out the latest cost
        
        $('.cart-total-price-get').html(add);                  // Update Payment page
        var tax = document.getElementById('shipping_fee').innerText;
        var with_tax = Number(tax) + Number(add);

        $('#final_amt').html(with_tax);

        updatePastry(q_id, newest_cost, latest_quantity)
    });




    // Update info of pastry after quantity change
    function updatePastry(id, pastryPrice, pastryNum){

        var jsondata = {
            'price': pastryPrice,
            'quantity': pastryNum,
        };

        var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://pastries-5f62.restdb.io/rest/pastry/${id}`,
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "61fe62826a791555010217e9",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            alert('Updated Successfully!')

        });
    
    }


    // Remove items off the order list
    $('#order_list tbody').on('click', '.delete', function () {

        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        let pastryid = $(this).data('id');

        var t = document.querySelectorAll('#cost');


        for (var b = 0; b <= t.length; b ++){     // must be (<=) so that it includes the last row of the order
            if(unique[b].id == pastryid){
                var latest_price = t[b-1].innerHTML.replace('$','');  // (-1) to exclude the first row which is the labels '<thead>' from the table
            }
        }

        $(this).closest('tr').remove();                 // Remove immediately after button click (placed below so that i can still get the value that is being deleted)
        var newest_price = Number($('.cart-total-price').html()) - Number(latest_price);
        $('.cart-total-price').html(newest_price);      // To print out the latest cost after deletion
        
        $('.cart-total-price-get').html(newest_price);  // Update Payment page
        var tax = document.getElementById('shipping_fee').innerText;
        var with_tax = Number(tax) + Number(newest_price);

        $('#final_amt').html(with_tax);

        deleteinfo(pastryid);
    });

    
    function deleteinfo(id) {
    
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://pastries-5f62.restdb.io/rest/pastry/${id}`,
            "method": "DELETE",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "61fe62826a791555010217e9",
                "cache-control": "no-cache"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    }

    $('.cards .radio').click(function(){
        $('.radio').addClass('grey');
        $(this).removeClass('grey');
    })

});
