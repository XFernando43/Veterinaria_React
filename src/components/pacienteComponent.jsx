
export default function Paciente({pacientes, key}){
    return (
        <>
            <div key={key} className="bg-white shadow-sm rounded-xl py-10 px-5 mb-4">
                    <p className="font-bold mb-3 text-gray-700 uppercase">nombre: {' '}
                        <span className="font-normal normal-case">
                            {pacientes.Nombre}
                        </span>
                    </p>
                    
                    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                        <span className="font-normal normal-case">
                            {pacientes.Paciente}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                        <span className="font-normal normal-case">
                            {pacientes.Email}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
                        <span className="font-normal normal-case">
                            {pacientes.Alta}
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                        <span className="font-normal normal-case">
                            {pacientes.Sintomas}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Quas quam hic labore repellendus dolore ratione veritatis 
                            corrupti id alias facere, unde, culpa distinctio debitis et earum, 
                            maiores iure quos modi!
                        </span>
                    </p>
               
                </div>
        </>
    );
}