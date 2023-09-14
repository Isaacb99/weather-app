import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import Days from "../../Components/Days/days";
import CurrentDay from "../../Components/Current Day/CurrentDay";

function Home() {
   const [location, setLocation] = useState({
      lat: "",
      long: "",
   });

   const [infoLocation, setInfoLocation] = useState({});

   const handleGeolocalisation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
         });
      });
   };

   const localizar = async () => {
      const { data } = await axios.get(
         `http://localhost:3001/?lat=${location.lat}&long=${location.long}`
      );
      setInfoLocation(data);
      console.log(infoLocation);
   };

   useEffect(() => {
      handleGeolocalisation();
   }, []);

   return (
      <div className={style.main_container}>

         {/*
         //! DESCOMENTAR EL BOTON PARA PROBAR LA GEOLOCALIZACION
         */}
         {/* <button onClick={localizar}>get geolocation</button> */}

         <div className={style.container}>
            {/* esta seccion seria para el clima actual */}
            <div className={style.current_weather}>
               <CurrentDay />
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
