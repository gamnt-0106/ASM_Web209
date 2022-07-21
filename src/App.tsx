import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/user'
import AdminLayout from './components/Layout/admin'
import HomePage from './Home/home'
import AddProductPage from './pages/Admin/Product/add'
import ListProduct from './pages/Admin/Product/List'
import DetailPage from './Home/Detail'
import EditProduct from './pages/Admin/Product/edit'
import CategoriesPage from './pages/Admin/category'
function App(props:any) {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Routes>
          { /* User layout*/}
          <Route path='/' element={<UserLayout/>}>
            <Route index element ={<HomePage/>}/>
            <Route path='detail' element={<DetailPage/>}/>

          </Route>
               {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element ={<Navigate to ={"product"}/>}/>

          <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProductPage />} />
              <Route path='edit/:id' element={<EditProduct />} />
              {/* <Route path='categories' element={<CategoriesPage />} /> */}
            </Route>
        </Route>

        </Routes>
     
    </div>
  )
}

export default App
