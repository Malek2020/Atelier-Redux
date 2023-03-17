import './App.css';
import ProductsFn from './Components/ProductsFn';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AddProduct from './Components/AddProduct';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/slices/productSlice';
import Cart from './Components/Cart';


const NotFound=React.lazy(()=>import('./Components/NotFound'))
const NavigationBar=React.lazy(()=>import('./Components/NavigationBar'))
const ProductDetails=React.lazy(()=>import('./Components/ProductDetails'))


function App() {
  const dispatch=useDispatch()
  return (
    <>
    <Suspense fallback={<p>chargement ...</p>}>
    <NavigationBar/>
    <Routes>
      <Route path='/products'>
        <Route path='listP' element={<ProductsFn/>} loader={dispatch(fetchProducts())} />
        <Route path=":id" element={<ProductDetails/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="update/:id" element={<AddProduct/>} />
        <Route path="cart" element={<Cart/>} />
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
