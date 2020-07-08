import React , {useState} from 'react';
import {connect} from 'react-redux';
import { Card } from 'antd';
import {
  Link
} from "react-router-dom";
import ReactCardFlip from 'react-card-flip';

const { Meta } = Card;

function Cards({item, itemDetail}) {
    const [value, setFlipSide] = useState(false);

    const onClickFlip = () => {
      setFlipSide(!value)
    }

    return (
      <ReactCardFlip isFlipped={value} flipDirection="horizontal" >
      <Card
        hoverable
        cover={<img alt="example" src={item.image} style={{ height: 200 }}/>}
        onClick={onClickFlip}>
        
          <Link to="/details">
            <Meta title={item.name} description="some" onClick={()=>{itemDetail(item)}}/>
          </Link>
        
      </Card> 
        
      <Card
        hoverable
        cover={<img alt="example" src={item.image} style={{ height: 200 }}/>}
        onClick={onClickFlip}>
        <Meta title='This is the back of the card' description="some" />
      </Card> 
      
      </ReactCardFlip>
    
    
    )
  };
    const mapDispatchToProps = (dispatch) => {
    return{
      itemDetail: (item) => dispatch({type:'CLICKNAME', item})
    }
  };
  
  export default connect(null,mapDispatchToProps)(Cards);
  
  
  
  