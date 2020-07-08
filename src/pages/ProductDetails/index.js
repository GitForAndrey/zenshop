import React from 'react';
import {connect} from 'react-redux';

const ProductDetails = ({item}) => {
    console.log(item)
    
    return (
        <div>
            <p>{item.name}</p> 
        </div>
    )
}
const mapStateToProps = (store) => {
    return{
      item: store.products.selected,
    }
  };
  
  export default connect(mapStateToProps)(ProductDetails);

