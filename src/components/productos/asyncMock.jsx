const products= [
        {
          id: 1,
          name: "Remera Hombre",
          color: "beige",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/remeras/beige.jpg",
          stock: 10
      },
      {
          id: 2,
          name: "Remera Hombre",
          color: "gris",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/remeras/gris.jpg",
          stock: 5
      },
      {
          id: 3,
          name: "Remera Hombre",
          color: "negro",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/remeras/negra.jpg",
          stock: 3
      },
     {
          id: 4,
          name: "cargoHombre",
          color: "beige",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/pantalones/cargohombre.jpg",
          stock: 10
      },
      {
          id: 5,
          name: "cargoHombre",
          color: "gris",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/pantalones/grishombre.jpg",
          stock: 5
      },
      {
          id: 6,
          name: "cargoHombre",
          color: "negro",
          price: 100,
          image: process.env.PUBLIC_URL + "/data/pics/pantalones/negrohombre.jpg",
          stock: 3
      },
      
]


export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}