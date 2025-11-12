
const restaurantList = [
  {
    type: "restaurant",
    data: {
      id: "334475",
      name: "KFC",
      area: "BTM Layout",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhWrtZUN5-_umTUmzBPbzJiedCxvcB4AykQ&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334476",
      name: "McDonald's",
      area: "Koramangala",
      cuisines: ["Burgers", "Fries", "Desserts", "Beverages"],
      costForTwo: 35000,
      deliveryTime: 32,
      avgRating: "4.2",
      uuid: "1111-2222-3333-mc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q9Bpl-jw3gW5v9g_fiBHAjsCiz3OnOEQdg&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334477",
      name: "Domino's Pizza",
      area: "HSR Layout",
      cuisines: ["Pizza", "Pasta", "Italian", "Fast Food"],
      costForTwo: 50000,
      deliveryTime: 28,
      avgRating: "4.1",
      uuid: "dom-7777",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGATtiJxK-5WHN3RGYZBhmojnUHogPmWFLQ&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334478",
      name: "Burger King",
      area: "JP Nagar",
      cuisines: ["Burgers", "Wraps", "Fast Food"],
      costForTwo: 30000,
      deliveryTime: 34,
      avgRating: "4.0",
      uuid: "bk-0001",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9ZMwtnIBGuJZxGIsVR1Z34rBQaaFDebZxg&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334479",
      name: "Subway",
      area: "Indiranagar",
      cuisines: ["Healthy Food", "Sandwich", "Salad"],
      costForTwo: 45000,
      deliveryTime: 30,
      avgRating: "4.3",
      uuid: "sub-2222",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0DrJoRhfLj7xK1Q-KDlUBshVXsnFOc3Y0Q&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334480",
      name: "Pizza Hut",
      area: "Whitefield",
      cuisines: ["Pizza", "Italian", "Pasta"],
      costForTwo: 40000,
      deliveryTime: 35,
      avgRating: "4.0",
      uuid: "ph-3333",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgNstutbydCACzr56gQOSJe0JykKFMzuYbBuVOiD-Y6hOkXBKAOHJI4-eUX8BQNPhUHc&usqp=CAU"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334481",
      name: "Meghana Foods",
      area: "Marathahalli",
      cuisines: ["Biryani", "South Indian", "Andhra"],
      costForTwo: 50000,
      deliveryTime: 29,
      avgRating: "4.4",
      uuid: "megh-4444",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk2x7ybQRT-_dG4D0bjoyfijbQcNmim6adA&s"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334482",
      name: "Empire Restaurant",
      area: "Koramangala",
      cuisines: ["Biryani", "North Indian", "Tandoor"],
      costForTwo: 40000,
      deliveryTime: 31,
      avgRating: "4.2",
      uuid: "emp-5555",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jUUiI01R8eaJhLIJie_3t3VjS7bvcF2A4jTpkykfKWGKCiB4lA1ZgkeN-9fvGTCqShA&usqp=CAU"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334483",
      name: "Truffles",
      area: "Koramangala",
      cuisines: ["American", "Continental", "Desserts"],
      costForTwo: 60000,
      deliveryTime: 40,
      avgRating: "4.5",
      uuid: "truf-6666",
      img: "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334484",
      name: "A2B - Adyar Ananda Bhavan",
      area: "Electronic City",
      cuisines: ["South Indian", "Sweets", "Veg"],
      costForTwo: 30000,
      deliveryTime: 33,
      avgRating: "4.1",
      uuid: "a2b-7777",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cJuffOYN9KMeHk0uC0S7bsUQfVVByrapUYsdZmF_us3wMIprhSLaIo-NbvV9Wf0yWpQ&usqp=CAU"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334485",
      name: "Beijing Bites",
      area: "HSR Layout",
      cuisines: ["Chinese", "Asian", "Thai"],
      costForTwo: 50000,
      deliveryTime: 38,
      avgRating: "3.5",
      uuid: "bj-8888",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNKNRVCRp0fKWuJ7FbPQjFqnAM-Noqde1Yzn8jyq07E6COOS9pxEZGOvUiFoV2AodsFg&usqp=CAU"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334486",
      name: "Chai Point",
      area: "BTM Layout",
      cuisines: ["Beverages", "Snacks", "Fast Food"],
      costForTwo: 20000,
      deliveryTime: 20,
      avgRating: "3.0",
      uuid: "chai-9999",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDrnH6oxYIS2351Kf4m-WbWUIuioyJaMmUlXCLIMM3Qr3rNvmVAOQsys6xyfX5eFz4cw&usqp=CAU"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334487",
      name: "FreshMenu",
      area: "Koramangala",
      cuisines: ["Continental", "Healthy Food", "Salads"],
      costForTwo: 45000,
      deliveryTime: 27,
      avgRating: "2.2",
      uuid: "fm-1010",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334488",
      name: "Wow! Momo",
      area: "Jayanagar",
      cuisines: ["Tibetan", "Chinese", "Snacks"],
      costForTwo: 35000,
      deliveryTime: 25,
      avgRating: "4.3",
      uuid: "momo-1212",
      img: "https://www.wowmomo.com/wp-content/uploads/2025/06/Quick-Eats-_1920X799.png"
    }
  },
  {
    type: "restaurant",
    data: {
      id: "334489",
      name: "Sri Udupi Park",
      area: "MG Road",
      cuisines: ["South Indian", "Chinese", "Juices"],
      costForTwo: 30000,
      deliveryTime: 22,
      avgRating: "2.3",
      uuid: "udupi-1313",
      img: "https://lh3.googleusercontent.com/PHTvqC4ERjQOqY4SHwI_0z13Dn74yiy1o_uWUBrmGDen6h27jQY1YI_KdzVF-JJbYF3j0ZFH38Yn99843-trQi01G01qhaWteKXBVZY=w256-rw"
    }
  }
];


export default restaurantList ;