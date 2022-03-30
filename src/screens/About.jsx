import React from 'react';
import logo from '../assets/logo.png';
import AboutIcons from '../components/AboutIcons';
import Wave from 'react-wavify';

const About = () => {
  return (
    <div id="about" className="pt-20 bg-gray-100 overflow-hidden ">
      {/* <div className="wave-bg-footer w-full h-44"></div> */}
      <div className=" bg-sky-600 flex flex-col">
        <Wave
          className="rotate-180  "
          fill="#F3F4F6"
          paused={false}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.3,
            points: 3,
          }}
        />
        <div className="flex justify-center my-20 items-center ">
          <img
            class=" mr-4 lg:h-20  w-auto sm:h-12 h-8"
            src={logo}
            alt="logo"
          />
          <h2 className="text-indigo-100 font-Poppins text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl]">
            {' '}
            DiveCenter MDQ
          </h2>
        </div>
        <div className="flex justify-center w-full text-gray-200 ">
          <h3 className="w-2/3 my-16 text-3xl leading-10">
            <span className="text-indigo-300  font-semibold text-2xl">
              MDQ BUCEO
            </span>{' '}
            tiene todo lo que necesitas .. "nos dedicamos exclusivamente a esta
            actividad y contamos con instalaciones propias 🤿" <br />( Nos
            estamos renovando para brindarte un mejor servicio )
          </h3>
        </div>
        <Wave
          className=" h-40"
          fill="#F3F4F6"
          paused={false}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.3,
            points: 3,
          }}
        />
      </div>
      {/* <div className="wave-bg-blue w-full h-40"></div> */}

      <AboutIcons />
      {/* <div className="wave-bg w-full h-40 rotate-180"></div> */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="wave-bg w-full h-40 rotate-180"
      >
        <path
          id="wave1"
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
          fill="#155E75"
          fill-opacity="1"
        ></path>
        <path
          id="wave2"
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
          fill="#155E75"
          fill-opacity="1"
        ></path>
        <path
          id="wave3"
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
          fill="#0E7490"
          fill-opacity="1"
        ></path>
      </svg>

      <div className=" bg-cyan-700">
        <div className=" w-2/3 mx-auto bg-cyan-700 text-gray-200  ">
          <h3 className=" py-16 text-2xl leading-10">
            {' '}
            En{' '}
            <span className="text-indigo-300  font-semibold text-2xl">
              DIVECENTERMDQ
            </span>
            , contamos con la tecnologia mas avanzada en equipamientos y trajes
            para que obtengas la mejor capacitacion posible!!...y no solo eso,
            vas a poder obtener certificaciones de{' '}
            <spa className="text-indigo-300  font-semibold text-2xl">
              nivel internacional!!
            </spa>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
