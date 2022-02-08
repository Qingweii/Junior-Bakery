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

        for (var i = 0; i <response.length; i ++){

            order = `${order}<tr id='${response[i]._id}'><td><img src = '${response[i].image}' width = '100' height = '150'></td><td>${response[i].name}</td><td>${response[i].price}</td><td>${response[i].quantity}</td><td><a href='#delete-container' class='delete' data-id='${response[i]._id}'><i class="fas fa-times fa-2x" style='color: red;'></i></a></td></tr>`
        }

        //console.log(order);
        $('#order_list tbody').html(order);
            
    });


    $('#order_list tbody').on('click', '.delete', function () {

        $(this).closest('tr').remove(); // Remove immediately after button click 
        let pastryid = $(this).data('id');
        deleteinfo(pastryid)
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


