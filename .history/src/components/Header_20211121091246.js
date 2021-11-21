/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
import '../App.css';
export class Header extends Component {
    render() {
        let ListCart = [];
        let TotalCart=0;
        Object.keys(this.props.items.Carts).forEach(function(item){
            TotalCart+=this.props.items.Carts[item].quantity * this.props.items.Carts[item].price;
            ListCart.push(this.props.items.Carts[item]);
        });
        return (
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar  navbar-dark bg-dark">
                            <ul className="nav">
                                <li className="nav-item" ><Link to="/" className="nav-link active link-item"><i class="fab fa-react"></i> Sản Phẩm</Link></li>
                                <li className="nav-item"><Link to="/carts" className="nav-link link-item"><i class="fas fa-shopping-cart"></i> Giỏ Hàng : {this.props.numberCart} 
                                {Number(TotalCart).toLocaleString('en-US')}</Link></li>
                            </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart,
        items:state._todoProduct
    }
}
export default connect(mapStateToProps,null)(Header)
