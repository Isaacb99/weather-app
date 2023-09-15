import React from "react";
import style from "./CurrentDay.module.css";

function CurrentDay({ infoLocation }) {
   return (
      <>
         <div className={style.image_container}>IMG</div>

         <div className={style.data_current_container}>
            <div className={style.temp}>{infoLocation.temp}</div>

            <div className={style.data}>
               <h2>
                  {infoLocation.region}-{infoLocation.country}
               </h2>
               <h3>
                  {infoLocation.time}
               </h3>
            </div>

            <div className={style.condition}>
               <img src={infoLocation.iconWeather} alt="" />
               <h4>{infoLocation.condition}</h4>
            </div>
         </div>
      </>
   );
}

export default CurrentDay;
