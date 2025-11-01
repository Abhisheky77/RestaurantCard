function RestaurantCard(props) {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className='res-card'>
      <img className='food-img' src={resData.data.img} />
      <span>{name}</span>
      <span>{cuisines.join(" , ")}</span>
      <span>{avgRating} ⭐</span>
      <span>₹ {costForTwo / 100}  FOR TWO</span>
      <span>{deliveryTime} minutes</span>
    </div>
  )
}

export default RestaurantCard;