import React from "react";
import { Typography } from "@material-tailwind/react";
export const Grid = () => {
    const data = [
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            caption: "Home of Topnotchers",
            link: "https://example.com/topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",

            caption: "How to Enroll",
            link: "https://example.com/topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",

            caption: "Queueing System",
            link: "https://example.com/topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",

            caption: "Library and Escalator",
            link: "https://example.com/topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",

            caption: "Portal",
            link: "https://example.com/topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",

            caption: "Directions of Buildings",
            link: "https://example.com/topnotchers",
        },
    ];
    return (
        <>
            <div className="p-8 grid grid-cols-2 gap-2">
                {data.map(({ imageLink, caption, link }, index) => (
                    <div key={index}>
                        <figure className="relative w-full">
                            <img
                                className="min-w-full rounded-lg object-cover object-center md:h-60"
                                src={imageLink}
                                alt=""
                            />
                            <a
                                href={link}
                                rel="noopener noreferrer"
                                className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm hover:shadow-2xl cursor-pointer"
                            >
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className=""
                                >
                                    {caption}
                                </Typography>
                            </a>
                        </figure>
                    </div>
                ))}
            </div>
        </>
    );
};
