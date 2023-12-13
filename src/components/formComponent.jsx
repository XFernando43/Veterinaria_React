import React from "react";
import ErrorComponent from "./errorComponent";

export default function FormComponent({pacientes,SetPacientes}){
    let [Mascota,setMascota] = React.useState("Hook"); 
    let [Nombre,setNombre] = React.useState("Hook"); 
    let [Email,setEmail] = React.useState(""); 
    let [Alta, SetAlta] = React.useState(""); 
    let [Sintomas, SetSintomas] = React.useState(""); 

    let [error, SetError] = React.useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if([Mascota,Nombre,Email,Alta,Sintomas].includes('')){
            SetError(true);
        }else{
            console.log(Mascota,Nombre,Email,Alta,Sintomas);
            SetError(false);
            handleAddPaciente();             
        }   
        console.log(pacientes);
    }
    
    const handleAddPaciente = ()=>{
        let pacienteAux = {
            Mascota,
            Nombre,
            Email,
            Alta,
            Sintomas,
        }
        const aux = [... pacientes, pacienteAux];
        SetPacientes(aux);
    }

    return(
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
                <p className="text-lg mt-3 text-center">
                    Añade Pacientes y {" "}
                    <span className="text-indigo-600 font-bold">Administrar usuario</span>
                </p>
                
                <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg py-10 px-5">
                
                    <div className="text-left mb-5">
                        {
                        error&&(
                            <ErrorComponent message={"Hay campos sin completar"}/>
                        )
                        }
                        <label 
                            htmlFor="input_mascota"
                            className="block text-gray-700 uppercase font-bold">
                            Nombre de Mascota
                        </label>
                        <input 
                            type="text" 
                            name="input_mascota" 
                            placeholder="Nombre de Mascota"
                            value={Mascota}
                            onChange={(e)=> setMascota(e.target.value)} 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                            id="input_mascota" />
                    </div>

                    <div className="text-left mb-5">
                        <label 
                            htmlFor="input_propietario"
                            className="block text-gray-700 uppercase font-bold">
                            Nombre de Propietario
                        </label>
                        <input 
                            type="text" 
                            name="input_propietario" 
                            placeholder="Nombre de Propietario"
                            value={Nombre}
                            onChange={(e)=>setNombre(e.target.value)} 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                            id="input_propietario" />
                    </div>

                    <div className="text-left mb-5">
                        <label 
                            htmlFor="input_email"
                            className="block text-gray-700 uppercase font-bold">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="input_email" 
                            placeholder="Email de propietario"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                            id="input_email" />
                    </div>

                    <div className="text-left mb-5">
                        <label 
                            htmlFor="input_alta"
                            className="block text-gray-700 uppercase font-bold">
                            Alta
                        </label>
                        <input 
                            type="date" 
                            name="input_alta" 
                            onChange={(e)=>SetAlta(e.target.value) }
                            placeholder="Email de propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                            id="input_alta" />
                    </div>

                    <div className="text-left mb-5">
                        <label 
                            htmlFor="input_Sintomas"
                            className="block text-gray-700 uppercase font-bold">
                            Sintomas
                        </label>
                        <textarea 
                            type="date" 
                            name="input_Sintomas" 
                            value={Sintomas}
                            onChange={(e)=> SetSintomas(e.target.value)}
                            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                            id="input_Sintomas" />
                    </div>

                    <input
                            // onClick={handleSubmit}
                            className="bg-indigo-800 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer active:transition-transform"
                            type="submit"
                            value="Agregar Paciente"
                    />
 
                </form>
            </div>
        </>
    );
}