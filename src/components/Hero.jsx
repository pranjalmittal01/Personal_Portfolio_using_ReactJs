import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pm3.jpg";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Pranjal Mittal</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="rounded-2xl" src={profilePic} alt="Pranjal Mittal" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
