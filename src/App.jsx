
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './component/Create'
import View from './component/View'
import Update from './component/Update'

function App() {


  return (
   <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route exact path='/view' element={<View/>}/>
        <Route exact path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
