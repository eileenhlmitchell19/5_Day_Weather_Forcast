//Print/Render the weather data to the page.
var APP_ID = "2f5bc8626ea6c9333033abf0e40fcffb";
var cityList = $("#cityList")
var forecastCards = $("#forecastCards")


// Call this first: generatingPage();

function populateCityForcast() {
    let cityName = $("#cityTxtBxId").val()
    let forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APP_ID;
    
    // actually fetches url and turns it to a string using json
    fetch(forcastUrl)  
        .then(function(resp) { 
            console.log("resp", resp)
            return resp.json() 
        }) // Convert data to json
        .then(function(data) {
            console.log("data", data)
            var pickedForcastData = pickForcasts(data);
            console.log("forcastData: " + pickedForcastData);
            let cityDiv = $("<div>")
            let citySelected = data.city.name;
            cityDiv.text(citySelected);
            cityList.append(cityDiv)
            let forecastCardsDiv = $("<div>")
            
            let count = 8;
            let dayIndex = [0, count, 2*count,3*count, 4*count];

            
              let containerEle = $("<div class='container'>");
              let rowEle = $("<div class='row'>");
            for(let i = 0; i < dayIndex.length; i++){
                let dayData = data.list[dayIndex[i]];
                var temperature = dayData.main.temp;
                var humidity = dayData.main.humidity;
                var windSpeed = dayData.wind.speed;
                var weatherDate = dayData.dt;
                
                let columnEle = $("<div class='col-sm weather-cls'>");

                let dateParaEle = $("<p>")
                let dateBoldEle = $("<b>")
                let weatherDateObj = new Date(weatherDate*1000);
                let formattedWeatherDate = weatherDateObj.getMonth() + "/" + weatherDateObj.getDay() + "/" + weatherDateObj.getFullYear();
                dateBoldEle.append("Date: " + formattedWeatherDate);
                dateParaEle.append(dateBoldEle);
                columnEle.append(dateParaEle);

                let imgPath = "sun.gif";
                let imgEle = $("<img src='" + imgPath + "'>")
                columnEle.append(imgEle);

                let imgPath2 = "cold.jpeg";
                let imgEle2 = $("<img src='" + imgPath2 + "'>")
                columnEle.append(imgEle2);

                if(temperature < 286 ) {imgEle;}
                 else if(imgEle2);

                let tempEle = $("<p>")
                tempEle.append("Temp: " + temperature)
                columnEle.append(tempEle);

                let windEl = $("<p>")
                columnEle.append(windEl)
                windEl.append("Wind Speed: " + windSpeed);

                let humidityEle = $("<p>")
                columnEle.append(humidityEle)
                humidityEle.append("Humidity: " + humidity);

                rowEle.append(columnEle);
                

            // // let windSpeed = $("div")

            // let count = 8;
            // let dayIndex = [0, count, 2*count,3*count, 4*count];
            // for(let i = 0; i < dayIndex.length; i++){
            //     console.log(data.list[dayIndex[i]]).array.wind



            
            //-------------------------------------------------------
            //NOT WORKING
            // let windCardsDiv = $("<div>")
            // let row = $("<div class='row'>");
            // let column1 = $("<div class='col-sm-1'>");

            // let column2 = $("<div class='col-sm-1'>");

            // let column3 = $("<div class='col-sm-1'>");

            // let column4 = $("<div class='col-sm-1'>");

            // let column5 = $("<div class='col-sm-1'>");

            }
            containerEle.append(rowEle);

            $(".5day-forecast-cards").parent().append(containerEle);
            
            createCityForcastHtml(pickedForcastData);
            
        })
        .catch(function(ex) {
            console.log("Error" + ex);
          // catch any errors

        });
        
}


//create data using html
function createCityForcastHtml(pickedForcastData) {
    for(let index=0;index<pickedForcastData.length;index++) {
        var temprature = pickedForcastData[index].main.temp;
        var humidity = pickedForcastData[index].main.humidity;
        var windSpeed = pickedForcastData[index].wind.speed;
        

        // 1. Create Html for each day using above variables
        // let row = $("<div class='row'>");
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