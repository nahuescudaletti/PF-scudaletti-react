import { useParams } from "react-router-dom"
import { getProductById } from "../productos/asyncMock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()
useEffect(() => {
  getProductById(itemId)
    .then(response=>{
        setProduct(response)
    })
    .catch(error=>{
        console.error(error)
    })
  },[itemId])
  return(
    <div className="">
       <ItemDetail {...product}/>
    </div>
  )
}
export default ItemDetailContainer