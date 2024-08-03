const request = require("request")
const forecast = (latitude, longtitude, callback) => {
    const geocodeUrl = "http://api.weatherapi.com/v1/current.json?key=cfdba1c266bb403f8bb191410242707&q=" + latitude + "," + longtitude;

    request({ url: geocodeUrl, json: true }, (error, response) => {
      
        if (error) {
            callback("Can not find the website", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, response.body.location.name + " it is " + response.body.current.condition.text  +  response.body.current.temp_c)
        }
    })
}

module.exports = forecast