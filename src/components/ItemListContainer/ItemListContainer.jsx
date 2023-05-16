import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../productos/asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncfunc = categoryId ? getProductsByCategory : getProducts

    asyncfunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId])

  const category = categoryId ? categoryId.toUpperCase() : "Productos"; // Obtener nombre de la categoría en la URL y capitalizarla

  return (
    <div>
      <h1 className="text-center  fs-2 mb-2">{greeting} {category}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer