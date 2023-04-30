import ItemCount from "../ItemCount/ItemCount"

const ItemDetail =({id,name,color,price,image,stock})=>{
    return(
        <article>
            <h2>{name}</h2>
            <picture>
                <img src={image} alt={name} />
            </picture>
            <p>{color}</p>
            <p>{stock}</p>
            <p>{price}</p>
                <footer>
              <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada: ')}/>
                </footer>
        </article>
    )
}
export default ItemDetail