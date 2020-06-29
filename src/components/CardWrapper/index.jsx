import React from 'react';
import { Row, Col} from 'antd';


import Cards from '../../components/Cards';




function CardWrapper({data}) {

    const cardRender = (el) =>{
      return (    
                <Col span={5} key={el.id}>
                    <li style={{ listStyle:'none' }}>
                        <Cards item={el} />
                    </li>
                </Col>
            )
    }

    return (
        <ul>
        <Row justify="space-around">
            
            {(data.map(item => cardRender(item))
  
        )}
            
        </Row>
        </ul>
    );
  }

  export default CardWrapper;