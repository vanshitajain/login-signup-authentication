import React, {useState }from 'react'
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import fire from '../fire';

function CurrentWeather({handleLogout,name,phoneno
}) {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
      city: "",
      country: "",
    });
  
    const APIKEY = "f498b8982387efb328cc6576378edb17";
    async function weatherData(e) {
      e.preventDefault();
      if (form.city == "") {
        alert("Add values");
      } else {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
          .then((res) => res.json())
          .then((data) => data);
  
        setWeather({ data: data });
      }
    }
  
    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      if (name == "city") {
        setForm({ ...form, city: value });
      }
      if (name == "country") {
        setForm({ ...form, country: value });
      }
    };
    return (<>
      <section className="hero">
            <nav>
                <h2>{name}</h2>
                <h2>{phoneno}</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
        </section>
        
      <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp;&nbsp;
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}
          />
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Submit
          </button>
        </form>
  
        {/* {console.log(weather)} */}
        {weather.data != undefined ? (
          <div>
            <DisplayWeather data={weather.data} />
          </div>
        ) : null}
      </div>
      </>
    );
  }
  

export default CurrentWeather;
