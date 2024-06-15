let weather1=[]
let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 

//=====================creat api==================

 function search(x){
        let weather=new XMLHttpRequest()
        weather.open("GET","https://api.weatherapi.com/v1/forecast.json?key=2392d881a5b44e51837143008241406&q="+x+"&days=3")
        
        weather.send()
        weather.addEventListener("readystatechange", function(){
    
       if(weather.readyState==4){
        weather1=  JSON.parse(weather.response)

        display()

       }
})
}

//========================display data for user================

function display(){

        //weather
        let maxTemp= weather1.current.temp_c
        let maxTemp1=weather1.forecast.forecastday[1].day.maxtemp_c
        let maxTemp2=weather1.forecast.forecastday[2].day.maxtemp_c
        //location
        let name=weather1.location.name

        //weather status
        let gaw=weather1.current.condition.text
        let gaw1=weather1.forecast.forecastday[1].day.condition.text
        let gaw2=weather1.forecast.forecastday[2].day.condition.text

        //weather status icon
        let ico=weather1.current.condition.icon
        let ico2="https:"+ico
        
        let ico3=weather1.forecast.forecastday[1].day.condition.icon
        let ico4="https:"+ico3
        

        let ico5=weather1.forecast.forecastday[2].day.condition.icon
        let ico6="https:"+ico5
        

        //minmum of weather for next two days
        let minTemp1=weather1.forecast.forecastday[1].day.mintemp_c
        let minTemp2=weather1.forecast.forecastday[2].day.mintemp_c

        //date and day
        let date=weather1.forecast.forecastday[0].date
        let date1=weather1.forecast.forecastday[1].date
        let date2=weather1.forecast.forecastday[2].date

        let d = days [new Date(date).getDay()]
        let d1 = days [new Date(date1).getDay()]
        let d2 = days [new Date(date2).getDay()]

        let da= new Date(date).getDate()+1
        let da1= new Date(date1).getDate()+1
        let da2= new Date(date2).getDate()+1
        
        let mon= new Date(date).getMonth()
        let mon1= new Date(date1).getMonth()
        let mon2= new Date(date2).getMonth()

        //weather
        document.getElementById("firstday").innerHTML= maxTemp+"c"
        document.getElementById("sectday").innerHTML= maxTemp1+"c"
        document.getElementById("thrtday").innerHTML= maxTemp2+"c"


        //location
        document.getElementById("name").innerHTML=name

        //weather status
        document.getElementById("gaw").innerHTML= gaw
        document.getElementById("gaw1").innerHTML= gaw1
        document.getElementById("gaw2").innerHTML= gaw2

        //weather status icon
        document.querySelector(".ico").innerHTML="<img  src="+ico2+">"
        document.querySelector(".ico1").innerHTML="<img  src="+ico4+">"
        document.querySelector(".ico2").innerHTML="<img  src="+ico6+">"

        //minmum of weather for next two days
        document.getElementById("nextday").innerHTML= minTemp1
        document.getElementById("secday").innerHTML= minTemp2


         //date and day
        document.getElementById("to").innerHTML= d
        document.getElementById("next").innerHTML= d1
        document.getElementById("second").innerHTML= d2



        document.getElementById("h").innerHTML= months[mon]+da
        document.getElementById("h1").innerHTML= months[mon1]+da1
        document.getElementById("h2").innerHTML= months[mon2]+da2

}
