import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import $ from 'jquery';

export default function MainCarousel({images, imgWidth="100%", imgHeight="100%", autoPlayMode=false}) {

//   useEffect(()=>{$(document).ready(function(){
//     $('i').click(function(){
//       $('i').toggleClass('slideImage');
//     });
//   });
// console.log("Hello");
// })

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoPlayMode);

  let timeOut

  useEffect(()=>{
    timeOut = autoPlay && setTimeout(()=>{
      goToNext();
    }, 2600)
  })
  const slideStyle = {
    backgroundImage: `url(${images[currentIndex].url})`,
    width: {imgWidth},
    height: {imgHeight},
    backgroundPosition: "center",
    backgroundSize: "cover",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin:"0 auto",
    opacity:"1",
  }
  slideStyle.width=imgWidth;
  slideStyle.height=imgHeight;

  const sliderStyle = {
    height:"100%",
    position:"relative",
    margin: "0 auto",
  }
const leftArrow={
marginLeft:"50px"
}
const rightArrow={
marginRight:"50px"
}

// useEffect(()=>{
//   $(document).ready(function(){
//     $('.leftArrow').click(function(){
//       $('.slideImage').css('display','none')
//     })
//   })
// })

function goToPrevious(){
  const isFirstSlide = currentIndex ==0;
  const newIndex = isFirstSlide? images.length-1: currentIndex-1;
  setCurrentIndex(newIndex);

}
function goToNext(){
  const isLastSlide = currentIndex == images.length-1;
  const newIndex = isLastSlide? 0: currentIndex+1;
  setCurrentIndex(newIndex);
}

  return (
    <div className="slider" onMouseEnter={()=> {setAutoPlay(false); clearTimeout(timeOut);}} onMouseLeave={()=> {setAutoPlay(autoPlayMode)}} style={sliderStyle}>
      
      {images.map((slide, slideIndex) => (
          <>
            {currentIndex==slideIndex? <div key={slideIndex} className="buy-now-carousel">
              <h3 key={slideIndex + "h3"} className=" text-4xl text-black">FLAT 50% ON PERFORMANCE {currentIndex + 1}</h3>
              <p key={slideIndex + "p"} className="text-xl text-black">Boost your performance with flat 50% off training, running, and football gear! Limited time only.</p>
              <button key={slideIndex + "b1"} className="bg-black p-2 text-White hover:bg-zinc-400 hover:text-black">SHOP LIMITED DEALS</button>
              <button key={slideIndex + "b2"} className="bg-black p-2 text-White hover:bg-zinc-400 hover:text-black">SHOP ALL SALE</button>
            </div>: ""}
            </>
        ))}
      
      <div className="slideImage flex transition-transform duration-500 ease-out" style={slideStyle}>

      <i style={leftArrow} onClick={goToPrevious}  className="hover:cursor-pointer bi bi-caret-left-fill leftArrow"></i>
      <i style={rightArrow} onClick={goToNext} className="hover:cursor-pointer bi bi-caret-right-fill rightArrow"></i>
      <div className="flex flex-row items-center gap-4 bg-white opacity-40 rounded-xl h-6" style={{position:"absolute", margin:"0 auto",top:"95%", left:"50%", transform:"translate(-50%,-50%)", }}>
        {images.map((slide, slideIndex) => (
            <i onClick={() => {setCurrentIndex(slideIndex)}} key={slideIndex} style={{fontSize:"50px"}} className={`hover:cursor-pointer bi bi-dash hover:text-slate-300 text-black transition-all duration-300 + ${currentIndex==slideIndex? "text-slate-300":""} `}></i>
        ))}

      </div>

      </div>
      
    </div>
  );
}