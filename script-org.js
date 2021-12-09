//Print/Render the weather data to the page.
var cityName = "q"

//idk how to do this one -------------------------------------------
var appid = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`
//------------------------------------------------------------------

var timestamps = "cnt"

var units = "imperial"
//Fetched the geo data (lat, lon) 

    // q = Name of the City

    // limit = 5 (optional)

    // appid = Your custom API key

// Fetch the one call weather data
//cityNameang
function cityName(lat, lon) {
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    var url = `https://openweathermap.org/api?lat=${lat}&lon${lon}`;
    // actually fetches url and turns it to a string using json
    fetch( url )
        .then(function(response) {
            response.json();
        })
        // actually prints it to console
        .then(function(data) {
            console.log( data );
        })
}

    // lat

    // lon

    // units = imperial

    // exclude = minutely, hourly

    function oneCall(lat, lon) {
        var url = ``;
        // actually fetches url and turns it to a string using json
        fetch( url )
            .then(function(response) {
                response.json();
            })
            // actually prints it to console
            .then(function(data) {
                console.log( data );
            })
    }
    
        // lat
    
        // lon
    
        // units = imperial
    
        // exclude = minutely, hourly

// Print/Render the weather data to the page.

// From the <form> element, listen to the "submit"

// From the <button> element, listen to the "click"

    //Select <input>, get its value, and provide it to the geo API

// From the <button> container element, listen to the <button> "click"

    // Get the city from the button's data attribute

    $(".saveBtn").on("click", function(){
        for(let i = 0; i < businessHours.length; i++){
            let getTxtArea = $("#textarea" + i).val()
            localStorage.setItem("textarea"+i, getTxtArea);
        }
    })
    //-------------------------------------------