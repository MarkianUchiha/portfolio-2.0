import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return ( 
        <MotionTransition position="right" className="bottom-0 left-0 md:inline-block md:absolute">
            <Image src="/markidev_sosteniendo_pc.png" width={200} height={200} className="w-[250px] h-full"
            alt="avatar" />
        </MotionTransition>
     );
}
 
export default AvatarServices;