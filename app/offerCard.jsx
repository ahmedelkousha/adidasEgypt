
import "./offercard.css";


export default function OfferCard({ url}){

    return(
    <div className='offerCard flex flex-col justify-center items-center text-center'>
    <img className="offerCardImg" src={url} />
    <h2 style={{fontSize:"12px", fontWeight:"bold"}}>LIMITED TIME DEALS</h2>
    <p style={{fontSize:"12px"}}>Exciting offers coming your way! Stay tuned for unbeatable deals and surprises. Hurry before you miss out.</p>
    <a style={{textDecoration:"underline", fontSize:"12px", fontWeight:"bold"}} href="#">SHOP NOW</a>
    </div>
    )
}