import React from "react";
import style from "./CurrentDay.module.css";

function CurrentDay() {
   return (
      <>
         <div className={style.image_container}>IMG</div>

         <div className={style.data_current_container}>

            <div className={style.icon_weather}>
            </div>

            <div className={style.data}>
               <div className={style.location}></div>
            </div>
         </div>
      </>
   );
}

export default CurrentDay;
