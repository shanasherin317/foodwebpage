import { useContext } from "react"
import { AppContext } from "../App"
import { useNavigate } from "react-router"


export default function Wishlist() {
const {wishlist,wishlistClick}=useContext(AppContext)

const navigate=useNavigate();

const goBack = () => {
  navigate(-1);
};

const wishlistRemove = (item) => {
  wishlistClick(item);
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
wishlist.map((item)=>{

    return(
      <>
  
<div className="cards">
  <div className="dddd">
  <i onClick={()=>wishlistRemove(item)}  style={{ color:"red"}} className="fa-solid fa-heart"></i>
  </div>
  <div style={{textAlign:"center"}}>

            <img className="clctionimg" src={item.strMealThumb} alt="" />
  </div>
            <h2 className="headclction">{item.strArea}</h2>
            <p className="paraclction">33rs</p>
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
