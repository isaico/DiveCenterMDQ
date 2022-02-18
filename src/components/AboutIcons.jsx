import React from "react";
import { FaBookOpen, FaClipboardList, FaComments} from "react-icons/fa";

const AboutIcon = () => {
  return (
    <div className=" flex items-start justify-evenly flex-wrap py-16 max-w-7xl mx-auto">
      <div className=" about-icon-container">
        <FaBookOpen className="about-icon" />
        <h3 className="about-icon-title">Material de estudio digital.</h3>
        <h4 className="about-icon-text">
          Clases personalizadas, acorde a tus necesidades, donde vos diagramas
          días y horarios.
        </h4>
      </div>
      <div className="about-icon-container">
        <FaClipboardList className="about-icon" />
        <h3 className="about-icon-title">Equipamiento de última generación.</h3>
        <h4 className="about-icon-text">
          Desde tu curso inicial en buceo deportivo, hasta los niveles de
          instructorado, te acompañamos en toda tu formación.
        </h4>
      </div>
      <div className="about-icon-container">
        <FaComments className="about-icon" />
        <h3 className="about-icon-title">Disponibles para responder 24/7.</h3>
        <h4 className="about-icon-text">
          Estamos para brindarte el asesoramiento que necesites y despejar
          cualquier duda o consulta
        </h4>
      </div>
    </div>
  );
};

export default AboutIcon;
