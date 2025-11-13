import RestaurantCard from '../Components/RestaurantCard';
import restaurantList from "../utils/mockData";
import { useState,useEffect} from 'react';


function Body() {
  const [RL, setRL] = useState(restaurantList);

  const topCard = () => {
    const ans = RL.filter((res) => res.data.avgRating > 4);
    setRL(ans);
  }

  /* Fetch kar na ka do tarike ha 1 jo java script khud karta aur 2 ya ha loading --> Render --> API ---> Render.
   ==> start hote hi loading hoga aur skeleton render kar de ga phir API ko request bhaje ga data aate hi phir render ho jaya ga */

  const dataFetch = async () =>{
    const data = await fetch("https://dummyjson.com/recipes");
     const json =await data.json();

    //  setRL(json)
     console.log(json);
     
  }

  useEffect(()=>{
    dataFetch();
  },[])


// if(RL.length === 0){
//   return <h2>Loading....</h2>
// }

  return (
    <div className='body'>

      <div className='search' >
        <input type="text" placeholder="  Search for restaurants and food..." id="searchBox" />
        <button className='btn'>Search</button>
      </div>

      <div className='filter-btn'>
        <button className='top-filter' onClick={topCard}>Top Rated items</button>


      </div>



      <div className='res-conatainer'>
        {
          RL.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;