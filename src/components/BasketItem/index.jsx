import React, {useState, useEffect} from 'react';
import { InputNumber, Button, Tooltip } from 'antd';
import {Title, Img, Price, ItemContainer} from './style';

const BasketItem = ({item, quantityItem, deleteItem}) => {
    
    const [cost, changeCost] = useState(0);
     
   
    useEffect(() => {
        changeCost((cost) => {
            return (item.quantity*item.price);
        });
    }, [item]);

    const onChange = (value) => {
        quantityItem(value,item);
        changeCost((cost) => {
            return (value*item.price);
        });
       
    }

    return (
        <ItemContainer>
            <Img 
            src={item.image}
             alt="some"
            
             />
            <Title>{item.name}</Title>
            <Price> {cost} usd</Price>
            <InputNumber min={1} value={item.quantity} onChange={onChange} />
            <Tooltip title="delete">
                <Button shape="circle" onClick={()=>deleteItem({item})}>
                    X
                </Button>
            </Tooltip>

        </ItemContainer>
    )
}

export default BasketItem;
