const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `enter city name`;
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c315711381f2d40a6d44fa6ba82ab352`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerHTML = Math.round(arrData[0].main.temp);
            
            const tempMode = arrData[0].weather[0].main;
            if (tempMode == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68' ></i>"
            }
            else if (tempMode == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6' ></i>"
            }
            else if (tempMode == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be' ></i>"
            }
           
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6' ></i>"
            }
            var d = new Date();
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            var n = weekday[d.getDay()];
            day.innerHTML = n;
            const month=d.getMonth()+1;
            today_date.innerHTML =d.getDate()+"/"+month;

        }

        catch {
            city_name.innerHTML = `enter correct city name`;
        }


    }


}

submitBtn.addEventListener('click', getInfo);




