import React, {useState, useEffect} from 'react';
import { InputNumber, Button, Tooltip } from 'antd';
import {Title, Img, Price, ItemContainer} from './style';

const BasketItem = ({item, onChangeQuantiti, ondeleteItem}) => {

      
    const [cost, changeCost] = useState(item.price);
    const [quantity, changeItemQuantity] = useState(item.quantity);
   
    useEffect(() => {
        changeCost((cost) => {
            return (item.quantity*item.price);
        });
    }, [item.quantity]);

    const onChange = (value) => {
        onChangeQuantiti(value,item);

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
            <InputNumber min={1} defaultValue={item.quantity} onChange={onChange} />
            <Tooltip title="delete">
                <Button shape="circle" onClick={()=>ondeleteItem({item})}>
                    X
                </Button>
            </Tooltip>

        </ItemContainer>
    )
}

export default BasketItem;
