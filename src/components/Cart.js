/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../actions';
import '../App.css';

function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    return(
        <div className="row">
            <div className="col-md-12">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Delete</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                                <td class="delete-item">
                                    <i class="far fa-trash-alt" onClick={()=>DeleteCart(key)}></i>
                                </td>
                                <td>
                                    <img src={item.image} class="item-cart img-item"/>
                                </td>
                                <td>{item.price} $</td>
                                <td>
                                        <span className="btn btn-danger minus" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}><i class="fas fa-minus"></i></span>
                                        <span className="btn btn-info">{item.quantity}</span>
                                        <span className="btn btn-primary plus" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}><i class="fas fa-plus"></i></span>
                                </td>
                                <td>{ TotalPrice(item.price,item.quantity)} $</td>
                            </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="4">Total Carts</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        items:state._todoProduct
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
