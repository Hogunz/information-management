import Carousel from "@/Components/Carousel";

import Header from "@/Components/Header";
export default function Welcome() {
    return (
        <>
            <div className="relative h-screen flex flex-col justify-center scroll-smooth w-full bg-gradient-to-b from-[#000269] via-[#87AFD7] to-transparent">
                <div className="absolute inset-x-0">
                    <div className="flex justify-center">
                        <img
                            className="w-[600px] opacity-25 "
                            src="img/logo/UdD-Logo.png"
                            alt=""
                        />
                    </div>
                </div>

                <Carousel />
            </div>
        </>
    );
}
