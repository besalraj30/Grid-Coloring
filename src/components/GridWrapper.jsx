import { useState } from "react";
import Box from "./Box";

const GridWrapper = () => {

    const config = [
        [1,1,1],
        [1, 0,1],
        [1,1,1]
    ]

    const [order, setOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);

    const deactivate = () => {
        setIsDeactivating(true);

        const timer = setInterval(() => {
            setOrder((origOrder) => {
                const newOrder = origOrder.slice();
                newOrder.pop();

                if(newOrder.length==0)
                {
                    clearInterval(timer);
                    setIsDeactivating(false);
                }
                
                return newOrder;
            })
        }, 300);
    }

    const activateCells = (index) =>{
        const newOrder = [...order, index];
        setOrder(newOrder);

        if(newOrder.length === config.flat().filter(Boolean).length)
        {
            deactivate();
        }
    }

    console.log(config.flat());

    return (
        <div className="wrapper">
            <div className="grid" style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
                {config.flat(1).map((value, index) => {
                        return value ? <Box key={index} label={`Cell ${index}`} isDisabled={order.includes(index) || isDeactivating} filled={order.includes(index)} onClick={() => activateCells(index)}/> : <span key={index} />
                })}
            </div>
        </div>
    )
}

export default GridWrapper;