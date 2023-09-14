import React from "react";
import style from "./Home.module.css";
import Days from "../../Components/Days/days";
import CurrentDay from "../../Components/Current Day/CurrentDay";

function Home() {
   return (
      <div className={style.main_container}>
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