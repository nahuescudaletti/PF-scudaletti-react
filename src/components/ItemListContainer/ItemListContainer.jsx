import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../productos/asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

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

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
