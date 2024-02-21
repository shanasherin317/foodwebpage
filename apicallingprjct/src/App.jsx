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


export const AppContext= createContext()
function App() {

  const[wishlist,setWishlist]=useState([]);
  
  const wishlistClick=(strMealThumb,strArea)=>{
    setWishlist([...wishlist,{strMealThumb,strArea}])
  console.log('wishlist clicked',strMealThumb,strArea);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cardview/>,
    },
    {
      path: "/product",
      element:<>
      hgtyft
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

  let obj={wishlist,wishlistClick}

  return (
    <>
<AppContext.Provider value={obj}>

<RouterProvider router={router}/>

</AppContext.Provider>

    </>
  )
}

export default App
