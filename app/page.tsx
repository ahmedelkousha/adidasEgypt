"use client";
import "./globals.css";
import MainCarousel from "./mainCarousel";
import MainHeaderDesktop from "./mainHeaderDesktop";
import MainHeaderMobile from "./mainHeaderMobile";
import PromotionHeader from "./promotionHeader";
import OfferCard from "./offerCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef } from "react";

const IMAGES_OFFER_CARD = [
  { url: "shoes1.jpg", title: "Image 1" },
  { url: "shoes5.jpg", title: "Image 5" },
  { url: "shirt1.jpg", title: "Image 6" },
  { url: "shirt2.jpg", title: "Image 7" },
  { url: "shoes1.jpg", title: "Image 1" },
  { url: "shoes5.jpg", title: "Image 5" },
  { url: "shirt1.jpg", title: "Image 6" },
  { url: "shirt2.jpg", title: "Image 7" },
];
const IMAGES_CAROUSEL = [
  { url: "shoes1.jpg", title: "Image 1" },
  { url: "shoes5.jpg", title: "Image 5" },
  { url: "shirt1.jpg", title: "Image 6" },
  { url: "shirt2.jpg", title: "Image 7" },
];

export default function App() {
  const mainCarouselContainer = {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: "", //if not Full Width
  };

  //   const ITEM_WIDTH = 330;
  //   const containerRef = useRef();
  // const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleScroll = (scrollAmount)=>{
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft += newScrollPosition;
  // }
  // const [scrollIndex, setScrollIndex] = useState(0);
  const offerCardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {});

  function ScrollToIndex(index: number) {
    const imgNode = offerCardsRef.current?.querySelectorAll(
      ".offer-cards-wrapper > .offerCard"
    )[index];
    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

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
        <MainCarousel
          autoPlayMode={false}
          imgHeight="100%"
          imgWidth="100%"
          images={IMAGES_CAROUSEL}
        />
      </div>
      <div>
        <h2 className="offersHeadings text-center text-black flex flex-row justify-center items-center mt-4">SEASON{`'`}S FLASH SALE</h2>

        <div
          ref={offerCardsRef}
          /*style={{marginLeft:`${scrollPosition}px`}}*/ className="offer-cards-wrapper p-6 gap-6">
          <div
            className="offersArrows"
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              justifyContent: "space-between",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}>
            <i
              onClick={() => {
                // var min = scrollPosition ==0? min: setScrollPosition(scrollPosition +320)
                // const min =
                //   scrollIndex == 0 ? 0 : setScrollIndex(scrollIndex - 7);
                // setScrollIndex(0);
                ScrollToIndex(0);
              }}
              className="offers-cards-arrow-left bi bi-arrow-left cursor-pointer"></i>
            <i
              onClick={() => {
                // var max = scrollPosition == -960? max : setScrollPosition(scrollPosition -320)
                // const max =
                //   scrollIndex == 7 ? 7 : setScrollIndex(scrollIndex + 7);
                // setScrollIndex(7)
                ScrollToIndex(7);
              }}
              className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
          </div>
          {IMAGES_OFFER_CARD.map((image, imageIndex) => (
            <OfferCard key={imageIndex} url={image.url} />
          ))}
        </div>
      </div>
    </>
  );
}
