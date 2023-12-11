

export default function Paciente(){
    return (
        <>
            <div className="bg-white shadow-sm rounded-xl py-10 px-5 mb-4">
                    <p className="font-bold mb-3 text-gray-700 uppercase">nombre: {' '}
                        <span className="font-normal normal-case">
                            Ferrando
                        </span>
                    </p>
                    
                    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                        <span className="font-normal normal-case">
                            Juan
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                        <span className="font-normal normal-case">
                            Correo@correo.com
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
                        <span className="font-normal normal-case">
                            10 Diciembre 2022
                        </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                        <span className="font-normal normal-case">
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