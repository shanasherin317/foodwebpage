
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Topmenu() {
  const { wishlistClick } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [color, setColor] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`);
    const convertedJson = await response.json();
    console.log(convertedJson, "sgsu");

    setData(convertedJson.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wishlistAdd = (strMealThumb, strArea) => {
    setColor([...color, { strMealThumb, strArea }]);
    wishlistClick(strMealThumb, strArea);
  };

  const isInWishlist = (strMealThumb) => {
    return color.some(item => item.strMealThumb === strMealThumb);
  };

  return (
    <div className="topmenu">
      <div>
        <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>Top Menu</h1>
        <p style={{ fontSize: "20px", textAlign: "center", marginBottom: "20px" }}>Checkout Top Rated Dishes on the Top Menu</p>
      </div>
      <div className="clction1">
        {data?.map(({ strMealThumb, strArea }, index) => {
          if (!(index < 8)) {
            return false;
          } else {
            return (
              <div className="cards" key={strMealThumb}>
                <div>
                  <i
                    onClick={() => wishlistAdd(strMealThumb, strArea)}
                    style={{ margin: "10px", color: isInWishlist(strMealThumb) ? "red" : "white" }}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
                <div style={{textAlign:"center"}}>
                <img className="clctionimg" src={strMealThumb} alt="" />

                </div>
                <h2 className="headclction">{strArea}</h2>
                <p className="paraclction">33rs</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Topmenu;