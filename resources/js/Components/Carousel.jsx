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
    const [currentData, setCurrentData] = React.useState({
        imageLink: "",
        imageLink1: [],
        videoLink: [],
        title: "",
    });

    const handleOpen = (data) => {
        setCurrentData(data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentData({
            imageLink: "",
            imageLink1: [],
            videoLink: [],
            title: "",
        });
    };

    const data = [
        {
            imageLink: "img/1.jpg",
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
            title: "Home of Topnotchers 【1】",
        },
        {
            imageLink: "img/2.jpg",
            imageLink1: [],
            title: "How to Enroll【2】",
            videoLink: ["vid/enrollment.mp4"],
        },
        {
            imageLink: "img/3.jpg",
            imageLink1: [
                "/img/step 1.jpg",
                "/img/step 2.jpg",
                "/img/step 3.jpg",
                "/img/step 4.jpg",
            ],
            title: "Queueing System 【3】",
        },
        {
            imageLink: "img/4.jpg",
            imageLink1: [
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            ],
            title: "Library / Escalator 【4】",
        },
        {
            imageLink: "img/5.jpg",
            imageLink1: [
                "img/portal/1.jpg",
                "img/portal/2.jpg",
                "img/portal/3.jpg",
                "img/portal/4.jpg",
            ],
            title: "Portal 【5】",
        },
        {
            imageLink: "img/6.jpg",
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
            title: "Buildings and Facilities 【6】",
        },
    ];
    return (
        <div className="">
            <Swiper
                parallax={true}
                init={false}
                loop={true}
                effect={"coverflow"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 2,
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
                {data.map((media, index) => (
                    <SwiperSlide className="max-w-5xl" key={index}>
                        <div
                            className="swiper-wrapper"
                            onClick={() => handleOpen(media)}
                        >
                            <div className="swiper-slide w-full h-full object-center bg-center object-cover">
                                <img
                                    alt={media.title}
                                    className=""
                                    src={media.imageLink}
                                />
                                <div className="content absolute top-[40%] left-0 width-[70%] pl-[5%] text-white">
                                    <p
                                        className="title text-[3.0em] font-bold mb-[30px] shadow-sm"
                                        data-swiper-parallax="-50%"
                                        data-swiper-parallax-scale="1"
                                    >
                                        {media.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Dialog size="xl" open={open} handler={handleClose}>
                <DialogBody>
                    <Carousel>
                        {currentData.imageLink1.map((image, index) => (
                            <img
                                key={`img` + index}
                                alt={`image-${index}`}
                                className="h-[48rem] w-full rounded-lg object-cover object-center"
                                src={image}
                            />
                        ))}

                        {currentData.videoLink &&
                            currentData.videoLink.map((videoLink, index) => (
                                <video
                                    key={`vid` + index}
                                    alt={`video-${index}`}
                                    className="h-[48rem] w-full rounded-lg object-cover object-center"
                                    controls
                                    autoPlay
                                >
                                    <source src={videoLink} type="video/mp4" />
                                </video>
                            ))}
                    </Carousel>
                </DialogBody>
            </Dialog>
        </div>
    );
}
