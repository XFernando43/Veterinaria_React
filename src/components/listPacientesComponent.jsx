import Paciente from "./pacienteComponent";
import React from "react";


export default function ListadoPacientesComponents({pacientes}){
    const ID = React.useId();


    return(
        <>
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-lg mt-3 text-center">
                    Administra tus {" "}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>

                {
                    pacientes.map((paciente, index)=>(
                        <> 
                            <Paciente key={ID + "_P"} pacientes={pacientes[index]}/> 
                        </>
                    ))
                }
                
            </div>
        </>
    );
}