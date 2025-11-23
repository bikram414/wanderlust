const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1662944726441-a4ca20f6f3fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "Secluded cabin nestled in the heart of the mountains. Perfect for hiking, nature lovers, and a peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761158172544-f5b057f6d033?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Chic City Loft",
    description:
      "Modern and stylish loft in the vibrant city center. Close to all major attractions, restaurants, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1676228015170-a920030266ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Tranquil Lakeside Villa",
    description:
      "Luxurious villa with breathtaking lake views. Enjoy private dock access, swimming, and serene surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761240960690-4d2cd3c93911?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    price: 2500,
    location: "Lake Como",
    country: "Italy",
  },
  {
    title: "Historic Townhouse",
    description:
      "Step back in time in this beautifully preserved historic townhouse. Located in a charming old town with cobblestone streets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1762423780017-f9964b9070ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=385",
    },
    price: 1000,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Desert Oasis Retreat",
    description:
      "Unique desert retreat with stunning panoramic views. Ideal for stargazing and peaceful contemplation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1760261598144-dddd7e1a3ef9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    price: 900,
    location: "Sedona",
    country: "United States",
  },
  {
    title: "Tropical Treehouse",
    description:
      "Experience an unforgettable stay in this charming treehouse surrounded by lush tropical gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520179237290-429836c06b1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464",
    },
    price: 700,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Ski-in/Ski-out Chalet",
    description:
      "Perfect for winter sports enthusiasts! Directly on the slopes with breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610975173523-83c239a7cb77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
    },
    price: 3000,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Riverside Cabin",
    description:
      "Peaceful cabin by the river, ideal for fishing, kayaking, and enjoying nature's tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1636381039554-c29e14707498?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    },
    price: 850,
    location: "Columbia River Gorge",
    country: "United States",
  },
  {
    title: "Vineyard Estate",
    description:
      "Elegant estate nestled in a picturesque vineyard. Enjoy wine tasting and stunning countryside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1760371907949-174439c87e62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    price: 2800,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Bohemian Jungle Bungalow",
    description:
      "Immerse yourself in nature with this unique bungalow set deep in the jungle. Perfect for adventurous souls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1753686927694-5d309821dc9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    price: 600,
    location: "Manuel Antonio",
    country: "Costa Rica",
  },
  {
    title: "Historic Canal House",
    description:
      "Charming house overlooking a picturesque canal. Experience the unique ambiance of a historic European city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612470288669-cf7e52845956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    price: 1400,
    location: "Amsterdam",
    country: "Netherlands",
  },
];

module.exports = { data: sampleListings };
