'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const slides = [
    {
        h1: 'CONTEMPORARY DESIGN.',
        title: ' Flexible Homepage Layouts',
        desc: 'A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.',
        image: './slide2-img.png',
    },
    {
        h1: 'MODERN INTERIOR.',
        title: ' Designed for Elegant Living',
        desc: 'Minimal furniture with a modern touch for elegant living spaces.',
        images: [
            './slide1-img1.png',
           './slide1-img2.png',
        ],
    },
    {
        h1: 'LUXURY COMFORT.',
        title: ' Made with Premium Materials',
        desc: 'Crafted for comfort with premium materials.',
        image: './slide3-img.jpg',
    },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const h1Ref = useRef(null);
    const descRef = useRef(null);
    const imageRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            onComplete: () => {
                gsap.delayedCall(2, () => {
                    setCurrent((prev) => (prev + 1) % slides.length);
                });
            },
        });

        tl.fromTo(descRef.current, { opacity: 0, y: -300 }, { opacity: 1, y: 0, duration: 1.2 }, 0);
        tl.fromTo(h1Ref.current, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1.2 }, 0);

        if (imageRef.current) {
            tl.fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.2 }, 0);
        }

        imagesRef.current.forEach((img) => {
            tl.fromTo(img, { opacity: 0, y: -100 }, { opacity: 1, y: -130, duration: 1.2 }, 0);
        });

        return () => tl.kill();
    }, [current]);

    const { title, h1, desc, image, images } = slides[current];

    return (
        <section className="min-h-[80vh] w-full bg-gray-100 flex items-center overflow-hidden">
            <div className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-2 gap-10">

                    {/* TEXT SIDE */}
                    <div className="overflow-hidden">
                        <span className="text-sm tracking-[0.5em] text-zinc-700 block mb-4">
                            {`0${current + 1}`}
                        </span>

                        <p
                            ref={h1Ref}
                            className="text-2xl md:text-4xl font-semibold text-zinc-600 tracking-wide uppercase mb-2"
                        >
                            {h1}
                        </p>

                        <p
                            ref={descRef}
                            className="text-base md:text-xl mb-4"
                        >
                            {desc}
                        </p>

                        <div className="text-base sm:text-lg md:text-xl px-3 py-4 bg-zinc-900 text-white tracking-tighter uppercase text-center font-bold w-37.5 sm:w-45 md:w-[200px] cursor-pointer">
                            Shop now
                        </div>
                    </div>

                    {/* IMAGE SIDE */}
                    <div className="relative w-full h-80 sm:h-[95 md:h-115 flex items-center">
                        {image && (
                            <img
                                ref={imageRef}
                                src={image}
                                alt={title}
                                className="absolute right-0 max-w-55 sm:max-w-75 md:max-w-105"
                            />
                        )}

                        {images &&
                            images.map((img, index) => (
                                <img
                                    key={index}
                                    ref={(el) => (imagesRef.current[index] = el)}
                                    src={img}
                                    alt={`${title}-${index}`}
                                    className={`absolute max-w-35 sm:max-w-45 -top-92
                                        ${
                                            index === 0
                                                ? 'left-0'
                                                : 'right-0'
                                        }
                                    `}
                                />
                            ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
