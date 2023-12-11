import { useState } from 'react'
import HeaderComponent from './components/headerComponent'
import FormComponent from './components/formComponent'
import ListadoPacientesComponents from './components/listPacientesComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container mx-auto mt-10'>
      <HeaderComponent></HeaderComponent>
      <div className='mt-12 md:flex gap-6'>
        <FormComponent/>
        <ListadoPacientesComponents/>
      </div>
    </div>
    </>
  )
}

export default App
