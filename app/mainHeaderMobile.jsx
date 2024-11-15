import "bootstrap-icons/font/bootstrap-icons.css";
import "./nav-icon-menu.css";
import $ from 'jquery';
import { useEffect } from "react";


export default function MainHeaderMobile() {

  // useEffect(()=>{$(document).ready(function(){
  //   $('#nav-icon3').click(function(){
  //     $(this).toggleClass('open');
  //   });
  // });})

  // useEffect(()=>{$(document).ready(function(){
  //   $('#nav-icon3').click(function(){
  //     $('.menuAfterClick').fadeIn(150);
  //   $('.slideImage').toggleClass('.slideImageOpacity');
  //   // $('.menuAfterClick').fadeIn(3000);
  //   })
  //   $('.exitIcon').click(function(){
  //     $('.menuAfterClick').fadeOut(150);
      
  //   })
  // });})

  useEffect(()=>{
    $(document).ready(function(){
        $('#nav-icon3').click(function(){
          $('.menuAfterClick').fadeIn(150);
        });
        $('.exitIcon').click(function(){
          $('.menuAfterClick').fadeOut(150);
        });
        $('.single-day-mobile').click(function(){
          $('.singles-day-div-mobile').toggle(300);
        });
        $('.men-mobile').click(function(){
          $('.men-div-mobile').toggle(300);
        });
        $('.women-mobile').click(function(){
          $('.women-div-mobile').toggle(300);
        });
        $('.kids-mobile').click(function(){
          $('.kids-div-mobile').toggle(300);
        });
        $('.sports-mobile').click(function(){
          $('.sports-div-mobile').toggle(300);
        });
        $('.lifestyle-mobile').click(function(){
          $('.lifestyle-div-mobile').toggle(300);
        });
    })
  })
  

  return (
    <>
    {/* MAIN MENU */}
    <div className="menuAfterClick p-4">

      {/* CONTAINER LOGO & MENU START */}
      <div className="flex flex-row justify-between">
      <i className="bi bi-x-lg text-white"></i>
      <img className="pt-2 pb-2" src="adidas_logo.svg" alt="adidas logo" />
      <i className="exitIcon bi bi-x-lg text-black cursor-pointer"></i>
      </div>
      {/* CONTAINER LOGO & MENU START */}

      <hr className="mt-4 mb-4"/>

      {/* NAV MENU START */}
      <nav className="nav-menu-mobile text-black flex flex-col items-start">


        <div className="flex flex-col items-start categories-mobile">

{/* <     div className="divafter"> */}
      <a href="#" className="a-1 single-day-mobile font-bold">SINGLES DAY</a>
      {/* </div> */}

      <div className="singles-day-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">FEATURED</a>
        </nav>
      </div>

      {/* <div className="divafter"> */}
      <a href="#" className="a-2 men-mobile font-bold">MEN</a>
      {/* </div> */}

      <div className="men-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Men{`\'`}s Shoes</a>
          <a href="">Men{`\'`}s Clothing</a>
          <a href="">Men{`\'`}s Accesssories</a>
        </nav>
      </div>

        {/* <div className="divafter"> */}
        <a href="#" className="a-3 women-mobile font-bold">WOMEN</a>
        {/* </div> */}


      <div className="women-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Women{`\'`}s Shoes</a>
          <a href="">Women{`\'`}s Clothing</a>
          <a href="">Women{`\'`}s Accesssories</a>
        </nav>
      </div>

      {/* <div className="divafter"> */}
        <a href="#" className="a-4 kids-mobile">KIDS</a>
        {/* </div> */}


      <div className="kids-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Kids & Toddlers Sportswear</a>
          <a href="">Kids 4 to 8 Years Sportswear</a>
          <a href="">Kids 8 to 16 Years Sportswear</a>
          <a href="">Sports</a>
        </nav>
      </div>

      {/* <div className="divafter"> */}
        <a href="#" className="a-5 sports-mobile">SPORTS</a>
        {/* </div> */}

        
      <div className="sports-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Football</a>
          <a href="">Outdoor</a>
          <a href="">Running</a>
          <a href="">Gym & Training</a>
          <a href="">Other Sports</a>
        </nav>
      </div>

      {/* <div className="divafter"> */}
        <a href="#" className="a-6 lifestyle-mobile">LIFESTYLE</a>
        {/* </div> */}


      <div className="lifestyle-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Brands</a>
          <a href="">Collaborations</a>
          <a href="">Originals</a>
          <a href="">Collections</a>
          <a href="">Trending Sportswear</a>
        </nav>
      </div>

        </div>

        <hr style={{width:"100%", margin:"10px 0 10px 0"}}/>

        <div className="flex flex-col items-start info-mobile">

        <a href="#">Login</a>
        <a href="#">Wishlist</a>
        <a href="#">Order Tracker</a>
        <a href="#">Returns</a>

        </div>

        <hr style={{width:"100%", margin:"10px 0 10px 0" }} />

        <div className="flex flex-col items-start help-mobile">

        <a href="#">AdiClub</a>
        <a href="#">Store Finder</a>
        <a href="#">Help</a>

        </div>

        <hr style={{width:"100%"}} />

      </nav>
      {/* NAV MENU START */}
      
    </div>


    <nav className="menuContainerMobile flex flex-row justify-between items-center bg-white p-4">

    <div className="flex flex-row justify-start items-center gap-x-1">
    <div id="nav-icon3" className="">

    <span></span>
    <span></span>
    <span></span>
    <span></span>

    </div>
    <a href="#" className="bi bi-heart text-black"></a>
    </div>

    <div className="">
      <img className="pl-3 pb-1" src="adidas_logo.svg" alt="adidas logo" />
    </div>

    <div className="flex flex-row justify-end items-center gap-x-2">
    <a href="#" className="bi bi-person text-black"></a>
    <a href="#" className="bi bi-search text-black"></a>
    <a href="#" className="bi bi-bag text-black"></a>
    </div>

    </nav>
    </>
  );
}
