import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return ( 
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 md:mt-0">
                        Mis {" "}
                        <span className="font-bold text-secondary">
                            Servicios
                        </span>
                    </h1>
                        <p className=" mb-3 text-xl text-gray-300">
                            Ofrezco servicios, recuerda pedirle a una IA que te ayude con estos contenidos.
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-secondary/80 hover:bg-secondary">
                            Contactame
                        </button>
                </div>
                {/* Silder */}
                <div>
                    <SliderServices/>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;