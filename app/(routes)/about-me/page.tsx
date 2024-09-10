"use client"
import Avatar from "@/components/avatar";
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage />
            <Container>
                <h1 className="text 2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi {' '}
                    <span className="font-bold text-secondary">
                        Experiencia</span>
                </h1>
            <CounterServices />
            
            <TimeLine />
            
            </Container>
        </>
        );
}

export default PageAboutMe;