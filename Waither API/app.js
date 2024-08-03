// Task 2 ==> Weather api
// ///////////////////////////////////////////////////////////////////////////////////////////

// const request = require("request")
//============================================================================================

const country = process.argv[2]
const forecast = require("./datta1/forecast")
const geocode = require("./datta1/geocode")
geocode(country, (error, data) => {
    console.log("ERROR : ", error)
    console.log("DATA : ", data)

    forecast(data.latitude, data.longtitude, (error, data) => {
        console.log("ERROR : " , error);
        console.log("DATE : " , data);
    })
})
//===========================================================================================

