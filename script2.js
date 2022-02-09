 // Popup message at navigation bar
 function popupFunction(){
    var pop = document.getElementById('popup');
    pop.classList.toggle('show');
 }



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

            order = `${order}<tr id='${response[i]._id}'><td><img src = '${response[i].image}' width = '140' height = '150' style='object-fit: cover;'></td><td>${response[i].name}<br>$${response[i].orig}</td><td>$${response[i].price}</td>
            <td id='quantity'><button id="minus_q" data-quantity='${response[i].quantity}' data-id='${response[i]._id}'>-</button><div id = 'quantity_element'>${response[i].quantity}</div><button id="plus_q" data-quantity='${response[i].quantity}' data-id='${response[i]._id}'>+</button></td>
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
        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        min = 1;

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                if(quantity > min){
                    quantity = quantity - 1;
                    var x = unique[i].querySelector('#quantity_element');
                    x.innerText = quantity;
                }
            }
        }

        //console.log(quantity)
        updatePastry(q_id, quantity)
    });


    // When plus button is clicked to update quantity
    $('#order_list tbody').on('click', '#plus_q', function(){

        let quantity = $(this).data('quantity');  // to identify the quantity for that selected pastry
        let q_id = $(this).data('id');  // to identify the ID for which pastry is selected 
        var quantity_element = document.getElementById('order_list');
        var unique = quantity_element.getElementsByTagName('tr');

        max = 10;

        for (var i = 0; i < unique.length; i ++){

            if (unique[i].id == q_id){
                if(quantity < max){
                    quantity = quantity + 1;
                    var x = unique[i].querySelector('#quantity_element');
                    x.innerText = quantity;
                }
            }
        }

        //console.log(quantity)
        updatePastry(q_id, quantity)
    });



    // Update info of pastry after quantity change
    function updatePastry(id, pastryNum){

        var jsondata = {
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

        });
    
    }


    // Remove items off the order list
    $('#order_list tbody').on('click', '.delete', function () {

        $(this).closest('tr').remove(); // Remove immediately after button click 

        let pastryid = $(this).data('id');
        let pastrycosts = $(this).data('cost'); // To get the cost that is being deleted

        var newest_price = Number($('.cart-total-price').html()) - Number(pastrycosts);
        $('.cart-total-price').html(newest_price); // To print out the latest cost after deletion

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
            console.log(response)
        });

    }

});