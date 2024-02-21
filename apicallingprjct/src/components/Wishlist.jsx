import { useContext } from "react"
import { AppContext } from "../App"


export default function Wishlist() {
const {wishlist}=useContext(AppContext)

  return (
   
<>
<div className="wishlist">
{
wishlist.map(({strMealThumb,strArea})=>{

    return(
      <>
  
<div className="cards">
  <div className="dddd">
  <i  style={{ color:"red"}} className="fa-solid fa-heart"></i>
  </div>
            <img className="clctionimg" src={strMealThumb} alt="" />
            <h2 className="headclction">{strArea}</h2>
            <p className="paraclction">33rs</p>
            </div>
      </>
    )
  })
}
</div>

</>




  )
}
