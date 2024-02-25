
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Topmenu() {
  const { wishlistClick,wishlist,addToCart ,cart,handleOnAdd,handleOnRemove ,removeClick} = useContext(AppContext);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`);
    const convertedJson = await response.json();
    console.log(convertedJson, "sgsu");

    setData(convertedJson.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wishlistAdd = (item) => {
    // setColor([...color, { item }]);
    wishlistClick(item,wishlist);
  };


  return (
    <div className="topmenu">
      <div>
        <h1 style={{ fontWeight: "bold",color:"white", textAlign: "center", marginBottom: "20px"}}>Top Menu</h1>
        <p style={{ fontSize: "20px", textAlign: "center", marginBottom: "20px",color:"white" }}>Checkout Top Rated Dishes on the Top Menu</p>
      </div>
      <div className="clction1">
        {data?.map((item, index) => {
          if (!(index < 8)) {
            return false;
          } else {
            return (
              <>
              <div className="cards" key={item.strMealThumb}>
                <div>
                  <i
                    onClick={() => wishlistAdd(item)}
                    style={{ margin: "10px", color: wishlist.find((list)=>item.idMeal===list.idMeal)? "red" : "white" }}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
                <div style={{textAlign:"center"}}>
                <img className="clctionimg" src={item.strMealThumb} alt="" />

                </div>
                <h2 className="headclction">{item.strArea}</h2>
                <p className="paraclction">33rs</p>
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
        })}
      </div>
    </div>
  );
}

export default Topmenu;