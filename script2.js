 // Popup message at navigation bar
 function popupFunction(){
    var pop = document.getElementById('popup');
    pop.classList.toggle('show');
 }


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
            <td id='quantity'><button id="minus_q">-</button><div id = 'quantity_element'>${response[i].quantity}</div><button id="plus_q">+</button></td>
            <td><a href='#delete-container' class='delete' data-id='${response[i]._id}' data-cost='${response[i].price}'><i class="fas fa-times fa-2x" style='color: red;'></i></a></td></tr>`;

            money = money + Number(`${response[i].price}`); // Add the total price for pastry
        }

        //console.log(order);
        $('#order_list tbody').html(order);
        $('.cart-total-price').html(money);

    });


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


