import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/Slide/cart/Cart'
import categorySlice from '../features/Slide/category'
import categoryPhoneSlice from '../features/Slide/categoryPhone/categoryPhone'
import productSlice from '../features/Slide/product/product'
import userSlide from '../features/Slide/user/userSlide'
import searchSlide from '../features/Slide/searchSlice'
import order from '../features/Slide/orderSlide'
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlide.reducer,
        categoryPhone: categoryPhoneSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        searchProduct: searchSlide.reducer,
        order: order.reducer

    }
})