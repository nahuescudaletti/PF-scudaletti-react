const Item =({id,name,color,price,image,stock})=>{
    return(
        <article>
            <h2>{name}</h2>
            <picture>
                <img src={image} alt={name} />
            </picture>
            <p>{color}</p>
            <p>{stock}</p>
            <p>{price}</p>
        </article>
    )
}

export default Item