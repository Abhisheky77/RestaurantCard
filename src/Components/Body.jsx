import RestaurantCard from '../Components/RestaurantCard';
import restaurantList from "../utils/mockData";




function Body() {
  return (
    <div className='body'>

      <div className='search' >
        <input type="text" placeholder="  Search for restaurants and food..." id="searchBox" />
        <button className='btn'>Search</button>
      </div>

      <div className='res-conatainer'>
        {
          restaurantList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;