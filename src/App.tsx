import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/user'
import AdminLayout from './components/Layout/admin'
import HomePage from './Home/list'
import AddProductPage from './pages/Admin/Product/add'
import ListProduct from './pages/Admin/Product/list'
import DetailPage from './Home/Detail'
import EditProduct from './pages/Admin/Product/edit'
import CartPage from './pages/Cart'
import { CartProvider } from 'react-use-cart'
import ListHome from './Home/list'
import Home from './Home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddCategory from './pages/Admin/category/add'
import EditCategory from './pages/Admin/category/edit'
import ListCategory from './pages/Admin/category/list'
import { List } from 'antd'
import ListLinhKien from './pages/Admin/linhkien/linhKien'
import ListPhuKien from './pages/Admin/phukien/List'
import DetailProduct from './pages/Detailproduct'
import CategoryList from './pages/Admin/category/list'
import PrivateRoute from './midlerware/PrivateRouter'
function App(props: any) {

  const [count, setCount] = useState(0)

  const newLocal = "auto"
  return (
    <div className='App'>
      <Routes>
        { /* User layout*/}
        <Route path='/' element={<CartProvider><UserLayout /></CartProvider>}>
          <Route index element={<Home />} />
          <Route path='detail/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPage />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* Admin layout */}
        <Route path='/admin'element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Navigate to={"product"} />} />

          <Route path='product'>
            <Route index element={<ListProduct />} />
            <Route path='add' element={<AddProductPage />} />
            <Route path='edit/:id' element={<EditProduct />} />
          </Route>
          <Route path='categories'>
            <Route index element={<Navigate to={"phone"} />} />
            <Route path='add' element={<AddCategory />} />
            <Route path='edit/:id' element={<EditCategory />} />
            <Route path='phone'>
              <Route index element={<CategoryList />} />
            </Route>
            <Route path='phukien'>
              <Route index element={<ListPhuKien />} />
            </Route>

            <Route path='linhkien'>
              <Route index element={<ListLinhKien />} />
            </Route>
          </Route>

        </Route>
      </Routes>

    </div>
  )
}

export default App
