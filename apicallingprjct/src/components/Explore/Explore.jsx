import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../App";

function Explore() {

  const{wishlistClick} =useContext(AppContext);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [category,setCategories] = useState([]);
  const [data,setData]=useState([]);
  const [search,setSearch]=useState([]);
  const [color, setColor] = useState([]);
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


  const wishlistAdd = (strMealThumb, strArea) => {
    setColor([...color, { strMealThumb, strArea }]);
    wishlistClick(strMealThumb, strArea);
  };


  const isInWishlist = (strMealThumb) => {
    return color.some(item => item.strMealThumb === strMealThumb);
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

              <button className="explore" onClick={() => handleCategoryClick(item.strCategory)}> <img className="btnimg" src={item.strCategoryThumb} alt="" /> <br />{item.strCategory}</button>

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


{!display &&
data?.map(({strMealThumb,strArea,price})=>{

    return(
      <>
      
       <div className="cards">
       <div>
                  <i
                    onClick={() => wishlistAdd(strMealThumb, strArea)}
                    style={{ margin: "10px", color: isInWishlist(strMealThumb) ? "red" : "black" }}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
   <img className="clctionimg" src={strMealThumb} alt="" />
 <h2 className="headclction">{strArea}</h2>
  <p className="paraclction">{price}</p>
   </div>

      </>
    )
  })
}

{
search.map(({strMealThumb,strArea,price})=>{

    return(
      <>
     
     <div className="cards">
       <div>
                  <i
                    onClick={() => wishlistAdd(strMealThumb, strArea)}
                    style={{ margin: "10px", color: isInWishlist(strMealThumb) ? "red" : "black" }}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
   <img className="clctionimg" src={strMealThumb} alt="" />
 <h2 className="headclction">{strArea}</h2>
  <p className="paraclction">{price}</p>
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