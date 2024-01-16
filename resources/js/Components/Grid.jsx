// import React, { useState } from "react";
// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Avatar,
//     IconButton,
//     Typography,
//     Card,
//     Carousel,
// } from "@material-tailwind/react";

// export function Grid() {
//     const [open, setOpen] = useState(false);
//     const [image, setImage] = useState("");
//     const handleOpen = () => setOpen((cur) => !cur);
//     const data = [
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//             title: "Home of Topnotchers",
//         },
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//             title: "How to Enroll",
//         },
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
//             title: "Queueing System",
//         },
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//             title: "Library / Escalator",
//         },
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//             title: "Portal",
//         },
//         {
//             imageLink:
//                 "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//             title: "Directions of Buildings",
//         },
//     ];
//     return (
//         <>
//             <div className="p-2 grid grid-cols-3 gap-4">
//                 {data.map(({ imageLink, title }, index) => (
//                     <div key={index}>
//                         <Card
//                             key={index}
//                             className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
//                             onClick={() => {
//                                 handleOpen();
//                                 setImage((prev) => (prev = imageLink));
//                             }}
//                         >
//                             <figure className="relative h-96 w-full">
//                                 <img
//                                     alt="nature"
//                                     className="h-full w-full object-cover object-center"
//                                     src={imageLink}
//                                 />
//                                 <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
//                                     <div>
//                                         <Typography
//                                             variant="h5"
//                                             color="blue-gray"
//                                         >
//                                             {title}
//                                         </Typography>
//                                     </div>
//                                 </figcaption>
//                             </figure>
//                         </Card>
//                     </div>
//                 ))}
//                 <Dialog size="xl" open={open} handler={handleOpen}>
//                     <DialogBody>
//                         <Carousel>
//                             <img
//                                 alt="nature"
//                                 className="h-[48rem] w-full rounded-lg object-cover object-center"
//                                 src={image}
//                             />
//                         </Carousel>
//                     </DialogBody>
//                 </Dialog>
//             </div>
//         </>
//     );
// }
import React from "react";
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

export function Grid() {
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
                "/img/topnotchers/1.jpg",
                "/img/topnotchers/2.jpg",
                "/img/topnotchers/3.jpg",
                "/img/topnotchers/4.jpg",
                "/img/topnotchers/5.jpg",
                "/img/topnotchers/6.jpg",
                "/img/topnotchers/7.jpg",
                "/img/topnotchers/8.jpg",
                "/img/topnotchers/9.jpg",
                "/img/topnotchers/10.jpg",
                "/img/topnotchers/11.jpg",
                "/img/topnotchers/12.jpg",
            ],
            title: "Home of Topnotchers",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            imageLink1: [
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            ],
            title: "Directions of Buildings",
        },
    ];

    return (
        <>
            <div className="p-2 grid grid-cols-3 gap-4">
                {data.map(({ imageLink, imageLink1, title }, index) => (
                    <div key={index}>
                        <Card
                            className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                            onClick={() => handleOpen(imageLink1)}
                        >
                            <figure className="relative h-96 w-full">
                                <img
                                    alt={title}
                                    className="h-full w-full object-cover object-center"
                                    src={imageLink}
                                />
                                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                    <div>
                                        <Typography
                                            variant="h5"
                                            color="blue-gray"
                                        >
                                            {title}
                                        </Typography>
                                    </div>
                                </figcaption>
                            </figure>
                        </Card>
                    </div>
                ))}
            </div>
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
        </>
    );
}
