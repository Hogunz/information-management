import React, { useState } from "react";
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
} from "@material-tailwind/react";

export function Grid() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const handleOpen = () => setOpen((cur) => !cur);
    const data = [
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
    ];
    return (
        <>
            <div className="container mx-auto grid grid-cols-2">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <Card
                            key={index}
                            className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                            onClick={() => {
                                handleOpen();
                                setImage((prev) => (prev = imageLink));
                            }}
                        >
                            <img
                                alt="nature"
                                className="h-full w-full object-cover object-center"
                                src={imageLink}
                            />
                        </Card>
                    </div>
                ))}
                <Dialog size="xl" open={open} handler={handleOpen}>
                    <DialogBody>
                        <img
                            alt="nature"
                            className="h-[48rem] w-full rounded-lg object-cover object-center"
                            src={image}
                        />
                    </DialogBody>
                </Dialog>
            </div>
        </>
    );
}
