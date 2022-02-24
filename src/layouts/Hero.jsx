import React from "react";
import LinkTo from "../components/LinkTo";
import About from "../screens/About";
import video from "../assets/video.mp4"

const Hero = () => {
  return (
    <>
      <div class="relative bg-gray-100 overflow-hidden ">
        <div class="max-w-7xl mx-auto ">
          <div class=" h-screen relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            
            <div className="h-12"></div>
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Actividades Acuáticas</span>
                  <span class="block text-red-600 xl:inline">
                    MDQ Buceo
                  </span>
                </h1>
                <p class="lg:mb-20 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-7 md:text-xl lg:mx-0">
                  Si siempre has querido aprender a bucear , descubrir nuevas aventuras o simplemente ver el admirable mundo bajo las aguas, en <span class="block text-cyan-600 font-semibold xl:inline">
                    DIVECENTER MDQ
                  </span> es donde todo comienza!!!!
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start items-end ">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
                    >
                      {" "}
                      Empezar a bucear!{" "}
                    </a>
                    
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    
                    <LinkTo className={"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-gray-200 hover:bg-cyan-700 hover:text-white md:py-4 md:text-lg md:px-10"} to={"/cursos"} text="Ver Cursos" />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <img
            class=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-fixed"
            // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            src="https://pbs.twimg.com/media/D-iRpokXoAAyAkv.jpg"
            
            alt=""
          /> */}
          <video 
            loop
            muted
            autoPlay
            preload="auto"
            className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
       
      </div>
      <About />
    </>
  );
};

export default Hero;
