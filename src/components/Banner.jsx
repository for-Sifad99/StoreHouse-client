"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const slides = [
   {
      h1: "CONTEMPORARY DESIGN.",
      title: " Flexible Homepage Layouts",
      desc: "A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.",
      image: "https://i.ibb.co/rRKVxyZ4/h1-slide1-img.png",
   },
   {
      h1: "MODERN INTERIOR. ",
      title: "Designed for Elegant Living",
      desc: "Minimal furniture with a modern touch for elegant living spaces.",
      images: [
         "https://i.ibb.co/fGBt9pJ9/h1-slide2-img1-1.png",
         "https://i.ibb.co/tMPx2qks/h1-slide2-img2.png",
      ],
   },
   {
      h1: "LUXURY COMFORT. ",
      title: " Made with Premium Materials ",
      desc: "Crafted for comfort with premium materials.",
      image: "https://i.ibb.co/d4T7gysR/h1-slide3-img.jpg",
   },
];

const Banner = () => {
   const [current, setCurrent] = useState(0);

   const h1Ref = useRef(null);
   const titleRef = useRef(null);
   const descRef = useRef(null);
   const buttonRef = useRef(null);
   const imageRef = useRef(null);
   const imagesRef = useRef([]);

   useEffect(() => {
      const animateSlide = (slideIndex) => {
         const tl = gsap.timeline({
            onComplete: () => {
               setCurrent((prev) => (prev + 1) % slides.length);
            },
         });

         // desc → from top
         tl.fromTo(
            descRef.current,
            { opacity: 0, y: -550 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
            "-=1"
         );

         // button → from top
         tl.fromTo(
            buttonRef.current,
            { opacity: 0, y: -220 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
            "-=1.2"
         );

         // h1 → from right
         tl.fromTo(
            h1Ref.current,
            { opacity: 0, x: 200 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
         );

         // title → from left
         tl.fromTo(
            titleRef.current,
            { opacity: 0, x: -250 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
            "-=0.8"
         );

         // main image
         if (imageRef.current) {
            tl.fromTo(
               imageRef.current,
               { opacity: 0, x: -50 },
               { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" },
               "-=1.5"
            );
         }

         // extra images
         if (imagesRef.current.length > 0) {
            imagesRef.current.forEach((img, i) => {
               gsap.fromTo(
                  img,
                  { opacity: 0, x: -50 },
                  { opacity: 1, x: 0, duration: 1.2, ease: "power2.out", delay: i * 0.2 }
               );
            });
         }
      };

      animateSlide(current);
   }, [current]);

   const { title, h1, desc, image, images } = slides[current];

   return (
      <section className="min-h-[90vh] w-full bg-gray-100 flex items-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">

            {/* TEXT */}
            <div className="font-playwrite overflow-hidden">
               <span className="text-xs sm:text-sm tracking-[0.5em] text-gray-400 block mb-3 sm:mb-5">
                  {`0${current + 1}`}
               </span>

               <p ref={h1Ref} className="text-2xl sm:text-3xl md:text-4xl text-black font-semibold mb-2 tracking-wider">
                  {h1}
               </p>

               <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-[40px] font-extrabold tracking-[0.1px] mb-4 md:mb-5 text-black">
                  {title}
               </h1>

               <p ref={descRef} className="text-base sm:text-lg md:text-xl text-black font-semibold mb-4 md:mb-5 tracking-[0.1px]">
                  {desc}
               </p>

               <p
                  ref={buttonRef}
                  className="text-base sm:text-lg md:text-xl p-3 sm:p-4 bg-black text-white tracking-wider rounded-2xl text-center w-[150px] sm:w-[180px] md:w-[200px] cursor-pointer"
               >
                  Shop now
               </p>
            </div>

            {/* IMAGE */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[420px] flex justify-center items-center">
               {image && (
                  <img ref={imageRef} src={image} alt={title} className="absolute max-w-[220px] sm:max-w-[280px] md:max-w-[420px]" />
               )}

               {images &&
                  images.map((img, index) => (
                     <img
                        key={index}
                        ref={(el) => (imagesRef.current[index] = el)}
                        src={img}
                        alt={`${title} ${index + 1}`}
                        className={`absolute
                  ${current === 1
                              ? index === 0
                                 ? "top-[ -100px ] sm:top-[-150px] md:top-[-250px] max-w-[120px] sm:max-w-[180px] md:max-w-[220px] left-0 sm:left-[15px] md:left-[30px]"
                                 : "top-[0px] sm:top-[-50px] md:top-[-130px] max-w-[120px] sm:max-w-[180px] md:max-w-[220px] right-0"
                              : index === 0
                                 ? "top-[-80px] sm:top-[-100px] md:top-[-100px] max-w-[120px] sm:max-w-[150px] md:max-w-[180px] left-0"
                                 : "top-[10px] sm:top-[15px] md:top-[20px] max-w-[120px] sm:max-w-[150px] md:max-w-[180px] right-0"
                           }
                `}
                     />
                  ))}
            </div>
         </div>
      </section>
   );
};

export default Banner;
