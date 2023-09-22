import React from "react";
import style from "./CurrentDay.module.css";

function CurrentDay({ infoLocation }) {
   return (
      <>
         <div className={style.image_container}>

         </div>

         <div className={style.data_current_container}>
            <div className={style.temp}>{infoLocation.temp}°</div>

            <div className={style.data}>
               <h2 className={style.region_country}>
                  {infoLocation.region} - {infoLocation.country}
               </h2>
               <h3>
                  {infoLocation.time}
               </h3>
            </div>

            <div className={style.condition}>
               <img src={infoLocation.iconWeather} alt={infoLocation.iconWeather} />
               <h4 className={style.text_cond}>{infoLocation.condition}</h4>
            </div>
         </div>
      </>
   );
}

export default CurrentDay;
