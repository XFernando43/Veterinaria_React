
export default function Paciente({paciente}){
    return (
        <>
            <div className="bg-white shadow-sm rounded-xl py-10 px-5 mb-4">
                    <p className="font-bold mb-3 text-gray-700 uppercase">nombre: {' '}
                        <span className="font-normal normal-case">
                            {paciente.Nombre}
                        </span>
                    </p>
                    
                    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                        <span className="font-normal normal-case">
                            {paciente.Paciente}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                        <span className="font-normal normal-case">
                            {paciente.Email}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
                        <span className="font-normal normal-case">
                            {paciente.Alta}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                        <span className="font-normal normal-case">
                            {paciente.Sintomas}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Quas quam hic labore repellendus dolore ratione veritatis 
                            corrupti id alias facere, unde, culpa distinctio debitis et earum, 
                            maiores iure quos modi!
                        </span>
                    </p>

                    <div className=" flex justify-between">
                        <button className="bg-indigo-600 p-4 text-white rounded-lg hover:bg-indigo-300">
                            Editar
                        </button>
                        <button className="bg-red-600 p-4 text-white rounded-lg hover:bg-red-300">
                            Eliminar
                        </button>
                    </div>
                </div>
        </>
    );
}