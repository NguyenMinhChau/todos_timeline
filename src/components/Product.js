/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    render() {
        const {_products} = this.props._products;
        if(_products.length > 0){
            return (
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-md-12">
                    <table className="table mw-91">
                        <thead>
                            <tr>
                                <th>Họ và tên</th>
                                <th>Mã số sinh viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nguyễn Minh Châu</td>
                                <td>4501104023</td>
                            </tr>
                            <tr>
                                <td>Nguyễn Tuyết Ngân</td>
                                <td>4501104154</td>
                            </tr>
                            <tr>
                                <td>Nguyễn Duy Phúc</td>
                                <td>4501104179</td>
                            </tr>
                            <tr>
                                <td>Võ Thị Trúc Phương</td>
                                <td>4501104185</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item,index)=>(
                                    <div key={index} className="col-md-2 content-item" title={item.description}>
                                        <img src={item.image} className="img-resposive img-item" style={{width:'100%',height:'100px'}}/>
                                        <h5 className="title">{item.title}</h5>
                                        <button className="btn btn-primary btn-item" onClick={()=>this.props.AddCart(item)}><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div>
                <h4 className="loading">
                    <span className="loader"></span>
                </h4>
            </div>
        )
        
    }
}
const mapStateToProps = state =>{
    return {
        _products: state._todoProduct,
    };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
