//Print/Render the weather data to the page.
var APP_ID = "2f5bc8626ea6c9333033abf0e40fcffb"

// Call this first: generatingPage();

function populateCityForcast(cityName) {
    let forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APP_ID;
    
    // actually fetches url and turns it to a string using json
    fetch(forcastUrl)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            var pickedForcastData = pickForcasts(data);
            console.log("forcastData: " + pickedForcastData);
            createCityForcastHtml(pickedForcastData);
        })
        .catch(function(ex) {
            console.log("Error" + ex);
          // catch any errors
        });
}
//create data using html
function createCityForcastHtml(pickedForcastData) {
    for(index=0;index<pickedForcastData.length();index++) {
        var temprature = pickedForcastData[index].main.temp;
        var humidity = pickedForcastData[index].main.humidity;
        var windSpeed = pickedForcastData[index].wind.speed;
        
        // 1. Create Html for each day using above variables
    }
}
//generating page and static html buttons
function generatingPage() {
    /*
    <div class="card">
            <h3 class="card-header text-uppercase">Search By City</h3>
                <label class="form-label" for="username">Search by City</label>
                <input name="cityTxtBxId" id="cityTxtBxId" type="text" autofocus="true"/>
                <button id="searchBtnId" type="submit" class="btn">Search</button>

    */

    // 1. Get Search History from local Storage
    //2. For all Cities in following loop
    for(index=0;index<pickedForcastData.length();index++) {
        /// 3. Create Buttons for each City e.g. <button class="cityBtnCls" type="submit" class="btn">Bothell</button>
    }
    // </div>
    
}
//filterin g out to 5 correct responses. 12pm or 3pm?
//-----------------------------------------------------------------
function pickForcasts(forcastData) {
    var pickedForcasts = forcastData.list.slice(0, 5);
    return pickedForcasts;
}
    // lat

    // lon

    // units = imperial

    // exclude = minutely, hourly
//--------------------------------------------------------------
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
    //which api to use??? oncall not working not free?
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

    $("#searchBtnId").on("click", function() {
        var cityNameFromUser = $("#cityTxtBxId").val();
        populateCityForcast(cityNameFromUser);
    })

    $(".cityBtnCls").on("click", function(event) {
        // 1. Add cityNameFromUser to Local Storage
        // 2. Refresh the page
        var cityNameFromUser = event.text();
    })
    //-------------------------------------------