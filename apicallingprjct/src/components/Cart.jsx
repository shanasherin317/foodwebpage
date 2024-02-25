import { useContext } from "react"
import { AppContext } from "../App"
import { useNavigate } from "react-router"


function Cart() {
const {cart,handleOnAdd,handleOnRemove,removeClick}=useContext(AppContext)
console.log("Cart:", cart);


console.log(cart,'cartt');

const navigate=useNavigate();

const goBack = () => {
  navigate(-1);
};


  return (
   
<>
<div style={{backgroundColor:"black"}}>
  <div style={{textAlign:"center"}}>
<button style={{marginBottom:"10px"}} className="btn1" onClick={goBack}>
    Back
  </button>
 </div>
<div className="wishlist">
    
{
cart?.map((item)=>{

    return(
      <>
  
<div className="cards">
  <div style={{textAlign:"center"}}>
   <img className="clctionimg" src={item.strMealThumb} alt="" />
  </div>
            <h2 className="headclction">{item.strArea}</h2>
            <p className="paraclction">33rs</p>
            <div style={{textAlign:"center",color:"white"}}>
          <button className='btn1'  onClick={()=>handleOnAdd(item)}>+</button>
          {item.count}
          <button className='btn1 ms-2' onClick={()=>handleOnRemove(item)} >-</button>
          </div>
          <div style={{textAlign:"center"}}>
                <button className="btn1" style={{marginTop:"10px"}} onClick={()=>removeClick(item)} >Remove</button>
              </div>

            </div>
      </>
    )
  })
}
</div>
</div>
</>


  )
}
export default Cart
