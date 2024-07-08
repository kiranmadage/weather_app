import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import wind from './storm.png';
import tempretur from './summer.png'

// import img from './map.png';
// import temperature from './temperature.png';
// import country from './country.png'
// import discription from './job-description (1).png'
// import humidity from './humidity-sensor.png'


export function App() {


  const [City, setCity] = useState("pune")
  const [weather, setWeather] = useState()
  let temp;

  useEffect(
    () => {
      fatchWeather()
    }, []
  )

  useEffect(
    () => {
      fatchWeather()
    }, [City]
  )


  const fatchWeather = async () => {


    try {
      const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a342477e410a4f389be164553242406&q=${City}&aqi=no`);

      setWeather(result.data)
      console.log(weather)


    } catch (error) {
      console.error("this is error while fatching api", error);
    }
  };


  {
    weather && (temp = weather.current.temp_c)
    console.log(temp)
  }



  if (temp > 30) {

    document.getElementById("img").classList.add("bg-sunny")
    document.getElementById("img").classList.remove("bg-rain")
    document.getElementById("img").classList.remove("bg-cloudy")
    document.getElementById("img").classList.remove("bg-snow")
  }

  else if (temp <= 4) {
    document.getElementById("img").classList.remove("bg-sunny")
    document.getElementById("img").classList.remove("bg-rain")
    document.getElementById("img").classList.remove("bg-cloudy")
    document.getElementById("img").classList.add("bg-snow")

  }
  else if (temp >= 15) {
    document.getElementById("img").classList.add("bg-cloudy")
    document.getElementById("img").classList.remove("bg-sunny")
    document.getElementById("img").classList.remove("bg-rain")
    document.getElementById("img").classList.remove("bg-snow")

  }

  else if ((temp > 21) && (temp < 33)) {
    document.getElementById("img").classList.remove("bg-cloudy")
    document.getElementById("img").classList.remove("bg-sunny")
    document.getElementById("img").classList.add("bg-rain")
    document.getElementById("img").classList.remove("bg-snow")

  }


  return (

    <div className="main1" id="img"  >
      <h1 className="head1">Weather App</h1>
      <div className="text1">
        <input className="input1" type='text' value={City}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      {/* <button className="search" onClick={fetchWether}>search</button> */}

      {

        weather && (

          <div>

            <h1 className="name1">{weather.location.name}<br /> {weather.location.region}</h1>


            <div className="maindiv1">
              <div className="firstdiv1">
                <h3 className="celcias1"> <img className='img' src={tempretur}></img><br></br> {weather.current.temp_c} ℃</h3>

              </div>
              <div className="thirddiv secdiv">
                <h2 className="des"><img className="img" src={weather.current.condition.icon}></img> {weather.current.condition.text}</h2>
              </div>
              <div className="secdiv">
                <h2><img className='img' src={wind}></img><br />Wind Speed<br /> {weather.current.wind_kph}</h2>
              </div>

            </div>
            <div className="last">

              <h2>Current: {weather.location.localtime}</h2>


              <h2>Last updated: {weather.current.last_updated}</h2>

            </div>
          </div>

        )
      }
    </div>
  );
}
































//   return (

//     <>


//       <div className="main" id='img'  >
//         <h1 className='head'>Weather App</h1>
//         <input value={City} className='name' placeholder='Search City' onChange={(e) => { setCity(e.target.value) }} type='text' />



//         {/* <button className='city' onClick={fatchWeather}>Search 🔍</button>
//  */}

//         {
//           weather && (
//             <div className='box'>
//               <div className='box1'>
//                 <div className='loc'> <h1 className='temp font'><img className='img1' src={img}></img>{weather.location.name} ,<br />{weather.location.region}</h1> </div>
//                 <div><h5 className='temp'>{weather.location.localtime}</h5></div>
//               </div>




//               <div className='bag'>
//                 <div>
//                   <img className='icon ' src={weather.current.condition.icon}></img> <div><h5 className='temp '>{weather.current.condition.text}</h5> </div>
//                 </div>

//                 <div><h5 className='temp  cel'> {weather.current.temp_c}   ℃</h5></div>
//                 {/* <div><h5 className='temp location '>{weather.location.country}</h5></div> */}
//                 <div className='anu'></div>

//                 <div><h5 className='temp div'>{weather.current.humidity} %</h5> </div>



//               </div>
//               <div>

//               </div>

//             </div>
//           )
//         }
//       </div>
//     </>
//   );
// }


