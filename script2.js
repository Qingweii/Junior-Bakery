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
        console.log(response);

        let order = '';

        for (var i = 0; i <response.length; i ++){

            order = `${order}<tr id='${response[i]._id}'><td>${response[i].name}</td><td>${response[i].price}</td><td>${response[i].quantity}</td></tr>`
        }

        console.log(order);
        $('#order_list tbody').html(order)
            
    });


});
