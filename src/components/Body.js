import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const [listOfRestros,setListOfRestros]=useState(resObj)
    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filterdlist=listOfRestros.filter(res=>res.avgRating>4)
                    setListOfRestros(filterdlist)
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
          {listOfRestros?.map((restarurnt)=>
          <RestroCard key={restarurnt?.id} resData={restarurnt}/>
        )
          }

            </div>
        </div>
    )
}

export default Body;