"use client"

import  Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// Texto del Home y botones. el sequence usa un array para el texto y luego el tiempo en ms.
const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src= "/markidev_en_pc.png" priority width="300" height="300" alt="Profile pic" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes Imaginarlo,
                        <TypeAnimation
                        sequence={[
                            "Puedo Programarlo",
                            1000,
                            "Puedo Optimizarlo",
                            1000,
                            "Puedo Diseñarlo",
                            1000,
                            "Puedo Desplegarlo",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-base md:mx-0 md:mb-8">
                    Soy un desarrollador web con experiencia en la creación de productos digitales 
                    para startups y pequeñas empresas. Me apasiona trabajar en proyectos innovadores 
                    y ayudar a los emprendedores a alcanzar sus objetivos.
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                        rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver Proyectos
                        </Link>
                        <Link href="/contact" className="px-3 py-2 transition-all border-2 cursor-pointer border-secondary text-md w-fit 
                        rounded-xl hover:text-secondary hover:shadow-xl hover:shadow-secondary">
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Introduction;