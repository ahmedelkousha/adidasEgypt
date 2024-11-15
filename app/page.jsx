"use client";
import "./globals.css";
import MainCarousel from "./mainCarousel";
import MainHeaderDesktop from "./mainHeaderDesktop";
import MainHeaderMobile from "./mainHeaderMobile";
import PromotionHeader from "./promotionHeader";
import OfferCard from "./offerCard";
import "bootstrap-icons/font/bootstrap-icons.css";
const IMAGES = [
{url: "shoes1.jpg", title:"Image 1"},
{url: "shoes5.jpg", title:"Image 5"},
{url: "shirt1.jpg", title:"Image 6"},
{url: "shirt2.jpg", title:"Image 7"}
];


export default function App() {

  

  const mainCarouselContainer={
    width:"100%",
    height: "100vh",
    margin:"0 auto",
    backgroundColor: "" //if not Full Width
  }

//   const ITEM_WIDTH = 330;
//   const containerRef = useRef();
  // const [scrollPosition, setScrollPosition] = useState(0);
  
//   const handleScroll = (scrollAmount)=>{
//   const newScrollPosition = scrollPosition + scrollAmount;
//   setScrollPosition(newScrollPosition);
//   containerRef.current.scrollLeft += newScrollPosition;
// }

  return (
    <>

      <PromotionHeader
        title1={"FREE DELIVERY OVER 999 EGP"}
        title2={"WELCOME OFFER 15% OFF"}
        title3={"FREE RETURNS"}
      />
      <MainHeaderMobile />
      <MainHeaderDesktop />
      <div style={mainCarouselContainer}>
      <MainCarousel autoPlayMode={false} imgHeight='100%' imgWidth='100%' images={IMAGES}/>
      </div>

      <div /*style={{marginLeft:`${scrollPosition}px`}}*/  className="offer-cards-wrapper p-6 gap-6">
      <div style={{position:"absolute", display:"flex", flexDirection:"row", width:"100%", left:"50%", transform:"translate(-50%, -50%)", justifyContent:"space-between", paddingLeft:"40px", paddingRight:"40px"}}>
        <i onClick={()=>{
          
          // var min = scrollPosition ==0? min: setScrollPosition(scrollPosition +320)
          
        }} className="offers-cards-arrow-left bi bi-arrow-left cursor-pointer"></i>
        <i onClick={()=>{
          // var max = scrollPosition == -960? max : setScrollPosition(scrollPosition -320)
        }} className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
        </div>

      {IMAGES.map((image, imageIndex)=>(
        < OfferCard key={imageIndex} images={IMAGES} url={image.url} />
      ))}
    
      </div>      
    </>
  );
}
