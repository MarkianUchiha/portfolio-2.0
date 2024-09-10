import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return ( 
        <MotionTransition position="right" className="bottom-0 left-0 md:inline-block md:absolute md:mb-0">
                <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/markidev_sosteniendo_pc.png" width={200} height={200} className="w-[250px] h-full md:mt-20"
                alt="avatar" />
                </div>
        </MotionTransition>
    );
}

export default AvatarServices;