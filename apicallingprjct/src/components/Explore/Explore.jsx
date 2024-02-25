import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../App";

function Explore() {

  const{wishlistClick,wishlist,addToCart} =useContext(AppContext);
  const [category,setCategories] = useState([]);
  const [data,setData]=useState([]);
  const [search,setSearch]=useState([]);
  const[display,setDisplay] = useState(false);
  const [button,setButton] =useState(false);
  const[restore,setRestore]=useState(false);
 const[refresh,setRefresh]=useState(false);

 
const fetchData=async()=>{
  try {

    const response_for_food_categories=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const toConvertJSON = await response_for_food_categories.json()
    setCategories(toConvertJSON.categories)
    console.log(toConvertJSON,'response_for_food_categories');

  } catch (error) {
    console.log("error",error);
  }

   }

   useEffect(()=>{
     fetchData();
     handleCategoryClick()
   }, [restore])
   
   useEffect(()=>{

   },[refresh])

const handleCategoryClick = async (categoryName="beef") => {

  // alert(item.strCategory)

  const response=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`)
  const convertedJson=await response.json();
console.log(convertedJson,"sgsu");

if (setDisplay(true)) {
  setData(false);
}else{
  setData(true);
  setDisplay(false);
  setSearch([]);
}

setData(convertedJson.meals);
  // setSelectedCategory(item);
  console.log(categoryName);

};

// const filteredData = selectedCategory ? data.filter(product => product.category === selectedCategory) : data;
console.log(data,'data');

const handleOnClick = (e) => {
  const searchTerm = e.target.value;

  if (searchTerm==="") {
    setDisplay(false)
  }else{
    setDisplay(true)
  }

  let result= data.filter((data)=>{
    if(data.strArea ===searchTerm) {
      return true
    }else if(data.strCategory===searchTerm){
      return true
    }
    })
  setSearch(result);
  }


  const wishlistAdd = (item) => {
    wishlistClick(item);
  };

  const handleSort=()=>{
    const dataSort= data.sort((a,b)=>{
      if (a.strArea<b.strArea) {
        return -1;    
      }
      if (a.strArea>b.strArea) {
        return 1;
      }
      return 0;
    })
    setData(()=>{
      return dataSort
    })
    setRefresh(!refresh);
    setButton(true);
  }

  const handleRestore=(()=>{
   
setRestore(!restore);
setButton(false);

  })

 
  return (
    <>
    <div className="products">
   
      <div className="explore-buttons">
     
        {
          category.map((item)=>{
            return (
              <>

              <button className="btns" onClick={() => {
                handleCategoryClick(item.strCategory)
              }}> <img className="btnimg" src={item.strCategoryThumb} alt="" /> <br />{item.strCategory}</button>

              </>
            )
          })
        }
      </div>

      <div className="inputdiv">
    <input onChange={handleOnClick} className="input1" type="text" placeholder="search"  />
  
  {button ? <button className="btnss" onClick={handleRestore}>Restore</button> :
    <button className="btnss" onClick={handleSort}>Sort</button> }
      </div>
    <div style={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-evenly" }}>
        {console.log(data,'data')}

{!display &&
data?.map((item)=>{

    return(
      <>
      
       <div className="cards">
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
  <p className="paraclction">{item.price}</p>
  <div style={{textAlign:"center"}}>
                <p className="addtocart" onClick={()=>addToCart(item)}>Add to cart</p>
              </div>
   </div>

      </>
    )
  })
}

{
search.map((item)=>{

    return(
      <>
     
     <div className="cards">
       <div>
                  <i
                    onClick={() => wishlistAdd(item)}
                    style={{ margin: "10px",  color: wishlist.find((list)=>item.idMeal===list.idMeal)? "red" : "white" }}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
                <div style={{textAlign:"center"}}>
   <img className="clctionimg" src={item.strMealThumb} alt="" />

                </div>
 <h2 className="headclction">{item.strArea}</h2>
  <p className="paraclction">{item.price}</p>
  <div style={{textAlign:"center"}}>
                <p className="addtocart">Add to cart</p>
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

export default Explore


