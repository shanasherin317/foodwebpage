import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Topcollection() {

  const [data,setData]=useState([]);

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
            <h1 style={{fontWeight:"bold",textAlign:"center",marginBottom:"20px"}}>Top Collections</h1>
            <p style={{fontSize:"20px",textAlign:"center",marginBottom:"20px"}}>The largest and unique Super rare NFT marketplace <br /> For crypto-collectibles</p>
        </div>
        <div className='collection'>
        <div className='clction1'>
         

            {
data?.map(({strMealThumb,strArea},index)=>{
   if (!(index < 8)) {
    return false
   }else{

   
    return(
      <>
            <div className="cards">
            <img className="clctionimg" src={strMealThumb} alt="" />
            <h2 className="headclction">{strArea}</h2>
            <p className="paraclction">Tasty Burger with French fries fast Food Ai image</p>
            </div> 
     

      </>
    )
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
