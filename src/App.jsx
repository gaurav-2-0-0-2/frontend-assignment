import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'  
import DynamicForm from './components/Form'





function App() {

  return (
    <div className='grid grid-cols-2 mt-20 text-center'>


      <Input />
      <DynamicForm/>  


    </div>


  )
}

export default App
