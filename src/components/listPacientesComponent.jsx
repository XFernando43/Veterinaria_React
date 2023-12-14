import Paciente from "./pacienteComponent";
import React from "react";


export default function ListadoPacientesComponents({pacientes}){
    const ID = React.useId();


    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            {pacientes && pacientes.length ? (
                <>
                    <p className="text-lg mt-3 text-center">
                        Administra tus {" "}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>           
                    {
                   pacientes.length > 0 ?(
                    pacientes.map((paciente)=>(
                        <> 
                            <Paciente 
                            key={Math.random()}
                            paciente={paciente}/> 
                        </>
                    ))
                    ):(
                        
                        <h1>No hay nada</h1>
                   )     
                }
                </>
            ):(
            <>
                <p className="text-lg mt-3 text-center">
                    Empieza a registrar a  {" "}
                    <span className="text-indigo-600 font-bold">tus Pacientes y Citas</span>
                </p>           
            </>
            )
                
            
            }            

        </div>
    );
}



{/* <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-lg mt-3 text-center">
                    Administra tus {" "}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>

 */}