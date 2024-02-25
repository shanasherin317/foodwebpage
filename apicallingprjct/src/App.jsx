import './App.css'
import Cardview from './Cardview'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Explore from './components/Explore/Explore';
import { createContext, useState } from 'react';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import SignUp from './components/SignUp';


export const AppContext= createContext()
function App() {

  const[wishlist,setWishlist]=useState([]);
  const[cart,setCart]=useState([]);

  const addToCart=(item)=>{
    let cartProduct = cart.find((list) => {
       if (item.idMeal === list.idMeal) {
           return true
       }
   })
   !cartProduct && 
   setCart([ ...cart, {...item ,count:1}])
   }

   const handleOnAdd = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (item.idMeal === cartItem.idMeal) {
        // If item exists in cart, increment its count
        return { ...cartItem, count: cartItem.count + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleOnRemove = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (item.idMeal === cartItem.idMeal && cartItem.count > 0) {
        // If item exists in cart and count is greater than 0, decrement its count
        return { ...cartItem, count: cartItem.count - 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const removeClick=(item)=>{
    const updatedCart = cart.filter((cartItem) => cartItem.idMeal !== item.idMeal);
    setCart(updatedCart);
      console.log(item,'item');
  }
  
  const wishlistClick=(item)=>{

    let isProductExist = wishlist.find((list) => item.idMeal === list.idMeal)

  console.log(isProductExist,'find');

  if (isProductExist) {
   let result= wishlist.filter((list)=>{
      if(item.idMeal===list.idMeal){
        return false
      }else{
        return true
      } 
    })
    setWishlist(result);
  }


 !isProductExist &&
    setWishlist([...wishlist,{...item}])
  }
  console.log('wishlist clicked',wishlist);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cardview/>,
    },
    {
      path: "/signin",
      element:<>
      <SignUp/>
      </>,
    },
    {
      path: "/cart",
      element:<>
     <Cart/>
      </>,
    },
    {
      path: "/wishlist",
      element:<>
     <Wishlist/>
      </>,
    },
    {
      path: "/explore",
      element:<>
      <Navbar/>
       <Explore/>

      </>,
    },
  ]);

  let obj={wishlist,wishlistClick,addToCart,cart,handleOnAdd,handleOnRemove,removeClick}

  return (
    <>
<AppContext.Provider value={obj}>

<RouterProvider router={router}/>

</AppContext.Provider>

    </>
  )
}

export default App
