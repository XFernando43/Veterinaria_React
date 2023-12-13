import React, { useState } from 'react'
import HeaderComponent from './components/headerComponent'
import FormComponent from './components/formComponent'
import ListadoPacientesComponents from './components/listPacientesComponent'
import './App.css'

function App() {
  const [pacientes,SetPacientes] = React.useState([]);

  return (
    <>
    <div className='container mx-auto mt-10'>
      <HeaderComponent></HeaderComponent>
      <div className='mt-12 md:flex gap-6'>
        <FormComponent 
            pacientes = {pacientes}
            SetPacientes = {SetPacientes}  
          />
        <ListadoPacientesComponents/>
      </div>
    </div>
    </>
  )
}

export default App
