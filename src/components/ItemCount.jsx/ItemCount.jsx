import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const agregar=()=>{
        setCount(count +1);
    }
    const descontar=()=>{
        setCount(count -1);
    }

    return (
        <div className='counter my-3'>
            <div className='d-flex justify-content-center'>
                <Button disabled={count <= 1} onClick={descontar} variant="primary" className="mx-1">-</Button>
                <span className="mx-1">{count}</span>
                <Button disabled={count >= stock} onClick={agregar} variant="primary" className="mx-1">+</Button>
            </div>
            <div>
                <Button disabled={count <=0} onClick={()=> onAdd(count)} variant="primary" className="my-2">agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;