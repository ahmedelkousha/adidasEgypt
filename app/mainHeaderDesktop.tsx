import "bootstrap-icons/font/bootstrap-icons.css";
// import { useEffect } from "react";
// import $ from 'jquery';

export default function MainHeaderDesktop() {

  // useEffect(()=>{$(document).ready(function(){
  //   $('.dropdown').hover(function(){
  //     $('.content').fadeIn(4000);
  //   })
  // });})

  return (
    <>
      <nav className="infoNav bg-white  flex justify-end gap-9 p-4 text-gray-500">
        <a href="#" className="list hover:underline">
          adidas official website Egypt
        </a>
        <a href="#" className="list hover:underline">
          help
        </a>
        <a href="#" className="list hover:underline">
          order tracker
        </a>
        <a href="#" className="list hover:underline">
          adiclub
        </a>
        <a href="#" className="list hover:underline">
          returns
        </a>
        <a href="#" className="list hover:underline">
          login
        </a>
        <a href="#" className="list hover:underline">
          flag
        </a>
      </nav>

      {/* 2nd section */}

      <nav className="menuContainerDesktop sticky top-0 z-10 bg-white text-black flex justify-center items-center p-2">
        <div className="basis-1/3">
          <img className="pl-3 pb-1" src="adidas_logo.svg" alt="adidas logo" />
        </div>

        <div className=" bg-white text-black flex gap-6 justify-center basis-1/3 nav-menu tracking-widest">
       
        {/* MEN */}

          <div className="dropdown">
            <a href="#" className="dropbutton font-bold mainList hover:underline">
              MEN
            </a>

            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>


          </div>
          </div>
          
           {/* WOMEN */}
          <div className="dropdown">

            <a href="#" className="women font-bold mainList hover:underline">
              WOMEN
            </a>
            
            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          </div>
          </div>

          {/* KIDS */}

          <div className="dropdown">
            <a href="#" className="kids font-bold mainList hover:underline">
              KIDS
            </a>

            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>


          </div>
          </div>

          {/* SPORTS */}

          <div className="dropdown">
            <a href="#" className="sports mainList hover:underline">
              SPORTS
            </a>
            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>


          </div>
          </div>

          {/* LIFESTYLE */}

          <div className="dropdown">
            <a href="#" className="lifestyle mainList hover:underline">
              LIFESTYLE
            </a>
            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          </div>
          </div>

          {/* SALE */}

          <div className="dropdown">
            <a
              href="#"
              className="sale mr-3 font-bold text-red-600 mainList hover:underline">
              SALE
            </a>
            <div className="content">
              
              <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">NEW & TRENDING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                SINGLES DAY💥
              </a>
              <a href="#" className="font-bold list hover:underline">
                New Arrivals
              </a>
              <a href="#" className="list hover:underline">
                Gazelle
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                Superstar
              </a>
              <a href="#" className="list hover:underline">
                Ultraboost
              </a>
              <a href="#" className="list hover:underline">
                adidas Sportswear
              </a>
              <a href="#" className="list hover:underline">
                Football Boots
              </a>
              <a href="#" className="list hover:underline">
                Samba
              </a>
              <a href="#" className="list hover:underline">
                Spezial
              </a>
              <a href="#" className="list hover:underline">
                Al-Ahly
              </a>
          </div>


          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S SHOES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Original Shoes
              </a>
              <a href="#" className="list hover:underline">
                Running Shoes
              </a>
              <a href="#" className="list hover:underline">
                Football Shoes
              </a>
              <a href="#" className="list hover:underline">
                Sneakers
              </a>
              <a href="#" className="list hover:underline">
                Slides
              </a>
              <a href="#" className="list hover:underline">
                Sandals
              </a>
              <a href="#" className="list hover:underline">
               Training Shoes
              </a>
              <a href="#" className="list hover:underline">
                Basketball Shoes
              </a>
              <a href="#" className="list hover:underline">
                Hiking & Trail
              </a>
              <a href="#" className="list hover:underline">
                Climbing Shoes
              </a>
              <a href="#" className="list hover:underline">
                White Sneaker
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S CLOTHING</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                T-shirts
              </a>
              <a href="#" className="list hover:underline">
                Swimwear
              </a>
              <a href="#" className="list hover:underline">
                Shorts
              </a>
              <a href="#" className="list hover:underline">
                Pants
              </a>
              <a href="#" className="list hover:underline">
                Sports Jerseys
              </a>
              <a href="#" className="list hover:underline">
                Tracksuits
              </a>
              <a href="#" className="list hover:underline">
                Hoodies
              </a>
              <a href="#" className="list hover:underline">
                Sweatshirts
              </a>
              <a href="#" className="list hover:underline">
                Jackets
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          <div className="flex flex-col">
            <a className="hover:underline" style={{fontWeight:"700"}} href="#">MEN{`\'`}S ACESSORIES</a>
            <hr style={{maxWidth:"inherit", paddingBottom:"20px"}}></hr>
              <a href="#" className="list hover:underline">
                Handwear
              </a>
              <a href="#" className="list hover:underline">
                Bags
              </a>
              <a href="#" className="list hover:underline">
                Socks
              </a>
              <a href="#" className="list hover:underline">
                Sports Balls
              </a>
            </div>

          </div>
          </div>
        </div>

        <div className="flex basis-1/3 gap-6 justify-end pr-3">
          <input style={{padding:"10px", backgroundColor:"rgb(239 239 239)"}} className="form-control searchinput" type="search" placeholder="search" />
          <a href="#" className="bi bi-person"></a>
          <a href="#" className="bi bi-heart"></a>
          <a href="#" className="bi bi-bag"></a>
        </div>
      </nav>

      {/* Below Header */}

      <div className="below-header">
        <p>
          Singles Day: Up to 60% off on selected articles.{" "}
          <a style={{ textDecorationLine: "underline" }} href="#">
            Shop Now
          </a>
        </p>
      </div>
    </>
  );
}
