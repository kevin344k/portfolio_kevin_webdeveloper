import linkedin_1 from "../assets/pdf/CertificadoDeFinalizacion_JavaScript_Avanzado_1.pdf";
import linkedin_2 from "../assets/pdf/CertificadoDeFinalizacion_JavaScript_Trucos.pdf";
import linkedin_3 from "../assets/pdf/CertificadoDeFinalizacion_React_esencial.pdf";
import asesor from "../assets/pdf/Asesor_inf_en_la_nube.pdf";
import jsBasico from "../assets/pdf/diploma-basico-javascript.pdf";
import htmlCss from "../assets/pdf/diploma-html-css.pdf";
import htmlCssPractico from "../assets/pdf/diploma-html-practico.pdf";
import poo from "../assets/pdf/diploma-oop.pdf";
import prog_basica from "../assets/pdf/diploma-programacion-basica.pdf";
import socket from "../assets/pdf/diploma-socket-io.pdf";
import titulo from "../assets/pdf/Titulo_0956109920.pdf";
import cisco from "../assets/pdf/TI_ESSENTIALS-certificate.pdf";

export default function View_edc() {
  return (
    <div className="border border-neutral-600  p-2 rounded-[20px] sm:w-72 h-fit shadow-md bg-[#242424] md:border-none md:w-full md:overflow-y-scroll md:h-full md:px-4">
         <div className="flex flex-col items-left gap-2 mb-8 mt-5 w-full">
       <p className="text-xl text-left font-bold">Formación</p>
       <div className="w-26 h-1 bg-yellow-500 "></div>
       </div>
       <div className="flex flex-col">
        <p className="my-4">Instituto Tecnológico Bolivariano</p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a className="bg-yellow-700 rounded-md p-3 " href={titulo}>
          TECNOLOGO EN ANALISIS DE SISTEMAS
          </a>
        
        </div>
      </div>
      <div className="flex flex-col">
        <p className="my-4">Platzi</p>
        <div className="flex flex-wrap gap-4 justify-start items-center">
          <a className="bg-yellow-700 rounded-md p-3 " href={asesor}>
            Asesor de infraestructura en la nube
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={prog_basica}>
            Programación Básica
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={jsBasico}>
            JavaScript Básico
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={htmlCss}>
            HTML Y CSS
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={htmlCssPractico}>
            HTML Y CSS práctico
          </a>

          <a className="bg-yellow-700 rounded-md p-3 " href={poo}>
            Programación Orientada a Objetos
          </a>

          <a className="bg-yellow-700 rounded-md p-3 " href={socket}>
            Aplicaciones en tiempo real con Socket.io
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="my-4">Linkedin Learning</p>
        <div className="flex flex-wrap gap-4 justify-start items-center">
          <a className="bg-yellow-700 rounded-md p-3 " href={linkedin_1}>
            JavaScript Avanzado 1
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={linkedin_2}>
            JavaScript Trucos
          </a>
          <a className="bg-yellow-700 rounded-md p-3 " href={linkedin_3}>
            React Esencial
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <p className="my-4">Cisco Networking Academy</p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a className="bg-yellow-700 rounded-md p-3 " href={cisco}>
            TI ESSENTIALS
          </a>

        </div>
      </div>
    </div>
  );
}
