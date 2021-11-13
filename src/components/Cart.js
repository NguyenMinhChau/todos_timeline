/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../actions';
import '../App.css';
import { Button } from 'antd';

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
            <div className="col-12 table-responsive">
            <table className="table">
                {(Number(TotalCart) > 0 ? 
                    <thead>
                        <tr>
                            <th scope="col">Xóa</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng</th>
                        </tr>
                    </thead> 
                :
                '')}
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
                                        <Button type="danger" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</Button>
                                        <Button className="btn-item-quanti" type="default">{item.quantity}</Button>
                                        <Button type="primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</Button>
                                </td>
                                <td>{ TotalPrice(item.price,item.quantity)} $</td>
                            </tr>
                        )
                    })
                }
                {Number(TotalCart) > 0 ? 
                <tr>
                    <td colSpan="4">Tổng thanh toán</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr> : 
                <tr>
                    <td colSpan="6">Không có sản phẩm nào. <a href="/">Mua sắm ngay</a></td>
                </tr>
                }
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
