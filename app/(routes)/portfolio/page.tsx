
import CircleImage from "@/components/circle-image";
import Container from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 
        <Container>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-cel justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis Ultimos <span className="text-secondary font-bold">Trabajos</span>
                </h1>
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data)=> (
                    <PortfolioBox key={data.id} data={data} />
                ))}
                </div>
            </div>

        </Container>
    );
}

export default PortfolioPage;