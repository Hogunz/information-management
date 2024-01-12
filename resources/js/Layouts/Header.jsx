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
} from "@material-tailwind/react";

export default function DialogWithImage() {
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <>
            <Card
                className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                onClick={handleOpen}
            >
                <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                />
            </Card>
            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody>
                    <img
                        alt="nature"
                        className="h-[48rem] w-full rounded-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                    />
                </DialogBody>
            </Dialog>
        </>
    );
}
