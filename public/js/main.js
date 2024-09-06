document.addEventListener('DOMContentLoaded', () => {
    let inputData = document.getElementById('inputData');
    let submiteBtn = document.getElementById('submiteBtn');
    let temp = document.getElementById('temp');
    let temp_status = document.getElementById('temp_status');
    let City_name = document.getElementById('City_name');

    const getInfo = async (e) => {
        e.preventDefault();
        let cityInput = inputData.value.trim();

        if (cityInput === '') {
            City_name.style.color = 'red';
            City_name.innerText = 'Please insert 😕 city name';
        } else {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=6a71fa12b5a79019dd135e349a6f69a0`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('City not found');
                }

                const data = await response.json();
                const arrData = [data];

                City_name.style.color = 'black';
                City_name.innerText =` ${arrData[0].name},${arrData[0].sys.country}`;
                temp.innerText = `${arrData[0].main.temp}`;
                const tempMood = arrData[0].weather[0].main;
                //conditions
                if(tempMood==='Clear'){
                    temp_status.innerHTML=`<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>`

                }
                else if(tempMood==='Clouds'){
                    temp_status.innerHTML=`<i class="fa-solid fa-cloud"></i>`

                }
                else if(tempMood === 'Rain'){
                    temp_status.innerHTML=`<i class="fa-solid fa-cloud-showers-water"></i>`
                }
                else{
                    temp_status.innerHTML=`<i class="fa-solid fa-sun"></i>`
                }
            } catch (error) {
                City_name.style.color = 'red';
                City_name.innerText = `Sorry 😔, ${error.message}`;
            }
        }
    }

    submiteBtn.addEventListener('click', getInfo);
});
