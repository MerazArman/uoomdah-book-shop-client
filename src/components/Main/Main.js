import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Main.css'

const Main = (props) => {

    const history = useHistory()
    const buyNowBtnHandler = (key) => {
        history.push(`/checkout/${key}`)
    }
    const { key, bookName, author, price, stock, img } = props.book;
    return (


        <div className="col-xxl-3 col-lg-4  col-md-6 col-sm-6 mb-4" >
            <div class="card" style={{ height: '100%', backgroundColor: '#f5f4f0' }} >
                <div class="row " >
                    <div class="col-md-5">
                        <img src={img} class="w-100 rounded-start " style={{ height: '100%' }} alt="..." />
                    </div>
                    <div class="col-md-7 border-start" >
                        <div class="card-body ">
                            <h5 class="card-title">{bookName}</h5>
                            <p class="card-text">By {author} </p>
                            <div className="d-flex justify-content-between ">
                                <p class="card-text">$ {price} </p>
                                <p class="card-text">stock:  {stock} </p>
                            </div>
                            <button className="btn btn-all " onClick={() => buyNowBtnHandler(key)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;




{/* <div class="card mb-3" style={{maxWidth: '400px'}}>
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{name} </h5>
                            <p class="card-text">{author} </p>
                            <p class="card-text">$ {price} </p>
                            <p class="card-text"><small class="text-muted">{stock} </small></p>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div> */}



        //     <div class="card card-style" style={{width:"14rem", height:"28rem"}}>
        //     <img src={img}class="card-img-top " style={{width:"50%"}}alt="..." />
        //     <div class="card-body"  style={{width:"100%"}}>
                // <h5 class="card-title">{bookName}</h5>
                // <p class="card-text">By {author} </p>
                // <p class="card-text">$ {price} </p>
                // <p class="card-text">stock:  {stock} </p>
                // <button className="btn btn-outline-light " style={{backgroundColor:'#6658ea'}} onClick={() => buyNowBtnHandler(key)}>Buy Now</button>


        //     </div>
        // </div>