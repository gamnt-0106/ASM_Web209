import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/user'
import AdminLayout from './components/Layout/admin'
import HomePage from './Home/home'
import AddProductPage from './pages/Admin/Product/add'
import ProductAdminPage from './pages/Admin/Product/product'
function App(props:any) {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Routes>
          { /* User layout*/}
          <Route path='/' element={<UserLayout/>}>
            <Route index element ={<HomePage/>}/>

          </Route>
               {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          <Route path='product/add' element={<AddProductPage/>}/>
          {/* <Route path='product/edit' element={<EditProduct/>}/>
          <Route path='categories' element={<CategoriesPage/>}/> */}
        </Route>
        </Routes>
     
    </div>
  )
}

export default App
