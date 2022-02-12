 // Popup message at navigation bar
 function popupFunction(){
    var pop = document.getElementById('popup');
    pop.classList.toggle('show');
 }


// Footer section (birthday submission)

function bday(e){
    alert('Your birthday is on its way, We\'ll be counting down to your special day ;)');
    e.preventDefault();
};


// Json data for random generator
var generatorbox = document.getElementById('random_btn')








// Getting the items to view order page when user click add to cart
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
    });




    // When minus button is clicked to update quantity
    $('#order_list tbody').on('click', '#minus_q', function(){

        let quantity = $(this).data('quantity');  // to identify the quantity for that selected pastry
        let q_id = $(this).data('id');  // to identify the ID for which pastry is selected 
        let pastrycosts = $(this).data('orig'); // To get the cost 

        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        min = 1;

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                if(quantity > min){
                    quantity = quantity - 1;
                    var x = unique[i].querySelector('#quantity_element');
                    var y = unique[i].querySelector('#cost');
                    x.innerText = quantity;         // to display the quantity when decreased on the html

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
        

        newest_cost = Number(pastrycosts) * Number(quantity);   // to get the value after quantity value change by multiplying the changed quantity
        y.innerText = '$' + newest_cost;
        var difference = Number(newest_cost) + Number(other_prices);    // to add the other prices with the changed value 

        $('.cart-total-price').html(difference);

        updatePastry(q_id, newest_cost, quantity)
    });




    // When plus button is clicked to update quantity
    $('#order_list tbody').on('click', '#plus_q', function(){

        let quantity = $(this).data('quantity');    // to identify the quantity for that selected pastry
        let q_id = $(this).data('id');              // to identify the ID for which pastry is selected 
        let pastrycosts = $(this).data('orig');     // To get the original cost

        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        max = 10

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                if(quantity < max){
                    quantity = quantity + 1;
                    var x = unique[i].querySelector('#quantity_element');
                    var y = unique[i].querySelector('#cost');
                    x.innerText = quantity;     // to display the quantity when increased on the html

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

        newest_cost = Number(pastrycosts) * Number(quantity);   // to get the value after quantity value change by multiplying the changed quantity
        y.innerText = '$' + newest_cost;
        var difference = Number(newest_cost) - Number($('.cart-total-price').html());   // To find the differences between the total and the changed value 
        var add = Number($('.cart-total-price').html()) + Number(difference) + Number(other_prices);   // add all together

        $('.cart-total-price').html(add);                      // To print out the latest cost

        updatePastry(q_id, newest_cost, quantity)
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

        $(this).closest('tr').remove();                 // Remove immediately after button click (placed below so that we can still get the value that is being deleted)
        var newest_price = Number($('.cart-total-price').html()) - Number(latest_price);
        $('.cart-total-price').html(newest_price);      // To print out the latest cost after deletion

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
            alert('Deleted Successfully')
        });

    }

});