import { CDN_URL } from "../utils/constants";
const RestroCard=({resData})=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={CDN_URL+resData.cloudinaryImageId} alt="res-logo" className="res-logo"/>
            <h3>{resData?.name}</h3>
            <h4>{resData?.cuisines.join(",")}</h4>
            <h3>{`${resData?.avgRating} starts`}</h3>
            <h3>{resData?.costForTwo}</h3>

            <h3>{resData?.deliveryTime}</h3>

        </div>
    )
}

export default RestroCard;