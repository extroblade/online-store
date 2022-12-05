import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../../http/deviceAPI";
import AddToBasket from "../modals/addToBasket";
import {Context} from "../../index";

const PictureDiv = () => {
    const {user} = useContext(Context)

    const [device, setDevice] = useState({info: []})
    const cart = [];
    const [count, setCount] = useState(0)
    const {id} = useParams()
    const [addToCartVisible, setAddToCartVisible] = useState(false);


    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    const addToCart = () => {
        if(user.isAuth){
            setCount(count + 1)
            setAddToCartVisible(true)
            cart.push(device);
            device.count = count
            localStorage.setItem(`device${id}`, JSON.stringify(cart))
        } else {
            window.alert('not authorized') //change to new modal
        }
        console.log(localStorage)
    }


    return (
        <div className={"d-flex card flex-row p-3"}>
            <div className={"card"}>
                <img src={process.env.REACT_APP_API_URL+device.img} style={{width: '35em'}} alt={"device"}/>
            </div>
            <div className={"d-flex flex-column mx-3"}>
                <div className={"d-flex flex-row mx-3"}>
                    {device.info.map(info =>
                        <div>
                            {info.description ? info.description+',' :
                                device.name
                            }
                        </div>
                    )}
                    &nbsp;
                    {device.info.length>0 ? <a href={"#characteristics"}>more info:</a> : <div>No info</div> }
                </div>
                <div className={"card d-flex flex-column my-3 p-3"} style={{boxShadow: "0 8px 24px rgb(0 0 0 / 12%)"}}>
                    <div className={" d-flex flex-row "}>
                        <div>
                            {device.price}₽
                        </div>
                        <button>
                            &lt;3
                            {/*<3*/}
                        </button>
                        <button onClick={() => addToCart()}>
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <span>Color (Mock colors):</span>
                        <button style={{backgroundColor: "blue"}} className="rounded-circle"/>
                    </div>


                    <div>
                        availableButtons(ll add later)
                    </div>
                </div>

                <div className={"card"}> Adds </div>
            </div>
            <AddToBasket show={addToCartVisible} onHide={() => setAddToCartVisible(false)} />
        </div>
    );
};

export default PictureDiv;
