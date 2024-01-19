import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "/resources/css/styles.css";

// import required modules
import {
    EffectCoverflow,
    Pagination,
    Autoplay,
    Navigation,
    Parallax,
} from "swiper/modules";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Card,
    Carousel,
} from "@material-tailwind/react";

export default function App() {
    const [open, setOpen] = React.useState(false);
    const [currentImages, setCurrentImages] = React.useState([]);

    const handleOpen = (images) => {
        setCurrentImages(images);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImages([]);
    };

    const data = [
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "/img/topnotchers/1.png",
                "/img/topnotchers/2.png",
                "/img/topnotchers/3.png",
                "/img/topnotchers/4.png",
                "/img/topnotchers/5.png",
                "/img/topnotchers/6.png",
                "/img/topnotchers/7.png",
                "/img/topnotchers/8.png",
                "/img/topnotchers/9.png",
                "/img/topnotchers/10.png",
                "/img/topnotchers/11.png",
                "/img/topnotchers/12.png",
                "/img/topnotchers/13.png",
            ],
            title: "Home of Topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "img/admission/1.jpg",
                "img/admission/2.jpg",
                "img/admission/3.jpg",
                "img/admission/4.jpg",
                "img/admission/5.jpg",
                "img/admission/6.jpg",
                "img/admission/7.jpg",
                "img/admission/8.jpg",
                "img/admission/9.jpg",
                "img/admission/10.jpg",
                "img/admission/11.jpg",
                "img/admission/12.jpg",
                "img/admission/13.jpg",
                "img/admission/14.jpg",
                "img/admission/15.jpg",
            ],
            title: "How to Enroll",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "/img/step 1.jpg",
                "/img/step 2.jpg",
                "/img/step 3.jpg",
                "/img/step 4.jpg",
            ],
            title: "Queueing System",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            ],
            title: "Library / Escalator",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "img/portal/1.jpg",
                "img/portal/2.jpg",
                "img/portal/3.jpg",
                "img/portal/4.jpg",
            ],
            title: "Portal",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "img/buildings/1.jpg",
                "img/buildings/2.jpg",
                "img/buildings/3.jpg",
                "img/buildings/4.jpg",
                "img/buildings/5.jpg",
                "img/buildings/6.jpg",
                "img/buildings/7.jpg",
                "img/buildings/8.jpg",
                "img/buildings/9.jpg",
                "img/buildings/10.jpg",
                "img/buildings/11.jpg",
                "img/buildings/12.jpg",
                "img/buildings/13.jpg",
                "img/buildings/14.jpg",
                "img/buildings/15.jpg",
                "img/buildings/16.jpg",
                "img/buildings/17.jpg",
                "img/buildings/18.jpg",
                "img/buildings/19.jpg",
                "img/buildings/20.jpg",
                "img/buildings/21.jpg",
                "img/buildings/22.jpg",
                "img/buildings/23.jpg",
                "img/buildings/24.jpg",
            ],
            title: "Buildings and Facilities",
        },
    ];
    return (
        <div className="">
            <Swiper
                parallax={true}
                init={false}
                effect={"coverflow"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSlideChange={() =>
                    swiperRef.current && swiperRef.current.autoplay.start()
                }
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    shadowScale: 2,
                    scale: 1,
                }}
                modules={[
                    EffectCoverflow,
                    Pagination,
                    Autoplay,
                    Navigation,
                    Parallax,
                ]}
                className=""
            >
                {data.map(({ imageLink, imageLink1, title }, index) => (
                    <div key={index}>
                        <SwiperSlide className="max-w-2xl">
                            <div
                                className="swiper-wrapper"
                                onClick={() => handleOpen(imageLink1)}
                            >
                                <div class="swiper-slide">
                                    <img
                                        alt={title}
                                        className=""
                                        src={imageLink}
                                    />
                                    <div class="content">
                                        <p
                                            class="title"
                                            data-swiper-parallax="-30%"
                                            data-swiper-parallax-scale=".7"
                                        >
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>

            <Dialog size="xl" open={open} handler={handleClose}>
                <DialogBody>
                    <Carousel>
                        {currentImages.map((imageLink1, index) => (
                            <img
                                key={index}
                                alt={`image-${index}`}
                                className="h-[48rem] w-full rounded-lg object-cover object-center"
                                src={imageLink1}
                            />
                        ))}
                    </Carousel>
                </DialogBody>
            </Dialog>
        </div>
    );
}
