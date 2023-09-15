import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import Days from "../../Components/Days/days";
import CurrentDay from "../../Components/Current Day/CurrentDay";

function Home() {
   const [position, setPosition] = useState({
      lat: "",
      long: "",
   });

   const [infoLocation, setInfoLocation] = useState({
      country:"",
      region: "",
      temp: "",
      time: "",
      condition: "",
      iconWeather: ""
   });

   const handleGeolocalisation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         setPosition({
            lat: position.coords.latitude,
            long: position.coords.longitude,
         });
      });
   };

   useEffect(() => {
      handleGeolocalisation()
   }, []);

   const localizar = async () => {
      try {
         if (position.lat !== "" && position.long !== "") {
            const { data } = await axios.get(
               `http://localhost:3001/?lat=${position.lat}&long=${position.long}`
            );
            setInfoLocation({
               country: data.location.country,
               region: data.location.region,
               temp: data.current.temp_c,
               time: data.current.last_updated,
               condition: data.current.condition.text,
               iconWeather: data.current.condition.icon
            });
         }
      } catch (error) {
         console.error("Error al obtener la ubicación:", error);
      }
   };

   useEffect(() => {

      if (position.lat !== "" && position.long !== "") {
         localizar();
      }
   }, [position]);

   useEffect(()=>{
      console.log(infoLocation);
   },[infoLocation])


   return (
      <div className={style.main_container}>

         <div className={style.container}>
            {/* esta seccion seria para el clima actual */}
            <div className={style.current_weather}>
               <CurrentDay infoLocation={infoLocation}/>
            </div>

            {/* esta seccion seria para los 3 dias de pronostico */}
            <div className={style.last_three_days}>
               <Days />
               <Days />
               <Days />
            </div>
         </div>
      </div>
   );
}

export default Home;
