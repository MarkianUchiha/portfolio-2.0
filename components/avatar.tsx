"use client"
import Image from "next/image";
import { MotionTransition } from "./transition-component";

const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/markidev_en_pc.png" width={400} height= {400} className="w-64 h-64" alt="Avatar" />
        </MotionTransition>
    );
}

export default Avatar;
