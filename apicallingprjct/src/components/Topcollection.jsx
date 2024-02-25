import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";


function Topcollection() {

  const [data,setData]=useState([]);
  const { addToCart ,cart,handleOnAdd,handleOnRemove,removeClick} = useContext(AppContext);

 const fetchData=async()=>{

  const response=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
  const convertedJson=await response.json();
console.log(convertedJson,"sgsu");

setData(convertedJson.meals);
  

};

useEffect(()=>{
  fetchData();
},[])

  return (
    <div className='clction'>
        <div>
            <h1 style={{fontWeight:"bold",textAlign:"center",marginBottom:"20px",color:"white"}}>Top Collections</h1>
            <p style={{fontSize:"20px",textAlign:"center",marginBottom:"20px",color:"white"}}>The largest and unique Super rare NFT marketplace <br /> For crypto-collectibles</p>
        </div>
        <div className='collection'>
        <div className='clction1'>
         

            {
data?.map((item,index)=>{
   if (!(index < 8)) {
    return false
   }else{

   
    return(
      <>
            <div className="cards">
              <div style={{textAlign:"center"}}>
            <img className="clctionimg" src={item.strMealThumb} alt="" />

              </div>
            <h2 className="headclction">{item.strArea}</h2>
            <p className="paraclction">Tasty Burger with French fries fast Food Ai image</p>
            <div style={{textAlign:"center"}}>
                  
                  {
                    cart.find((cartItem)=> cartItem.idMeal===item.idMeal ) ? 
                    <>
                    
                    <div style={{textAlign:"center",color:"white"}}>
                    <button className='btn1'  onClick={()=>handleOnAdd(item)}>+</button>
                    {
                      cart.find((cartItem)=> cartItem.idMeal===item.idMeal ).count
                    }
              
                    <button className='btn1 ms-2' onClick={()=>handleOnRemove(item)} >-</button>
                    </div>

                    <div style={{textAlign:"center"}}>
                <button className="btn1" style={{marginTop:"10px"}} onClick={()=>removeClick(item)} ><i className="fa-solid fa-trash"></i></button>
              </div>


                    </>

                
                    
                    : <p className="addtocart" onClick={()=>addToCart(item)}>Add to cart</p>
                
                  }
                
              </div>
              </div>
              </>
            );
          }
        })
        }
                   
        </div>
          <Link to={"/explore"}>
          <div style={{textAlign:"center"}}>
          <button className="explore">Explore</button>
          </div>
          </Link>
      </div>
    </div>
  )
}

export default Topcollection
