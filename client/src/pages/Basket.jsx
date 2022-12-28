 import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    const {device} = useContext(Context)

    const cart = []
    let basketDevices = []
    let i = 0

    console.log(localStorage)
    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , 20, device.name).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [localStorage])


    const deleteFromCart = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            cart.forEach(() => {
                localStorage.removeItem(`device${id}`)
            })
        }
    }


    device.devices.map(device => {
        cart.push(JSON.parse(localStorage.getItem(`device${device.id}`)));
        !cart[i] ? cart.pop() : i++;
    })
    cart.map(device => {
        device.map(t => {
            basketDevices.push(t)
        })
    })

    const clear = () => {
        device.devices.map((device ) => {
            localStorage.removeItem(`device${device.id}`)
            basketDevices = []
        })
    }
    function totalPriceCount(){
        let totalPrice = 0

        basketDevices.map(device => {
            totalPrice += device.price*(device.count+1);
        })
        return totalPrice;
    }

    return (
        <div className={"d-flex flex-column align-items-center m-5"}>
            <div className={"d-flex flex-column align-items-center"}>
                <button onClick={() => clear}>
                    delete all
                </button>
            </div>
            {basketDevices &&
                <div>
                TotalPrice - {totalPriceCount()}
                </div>
            }

            {basketDevices &&
            basketDevices.map(device =>
                <div className="card me-5 mb-4 p-5 d-flex align-items-center " style={{width: "16rem"}} key={"a" + device.id}>
                    <a href={DEVICE_ROUTE + '/' + device.id} style={{textDecoration: "none", color: "black"}}>
                        <img
                            src={process.env.REACT_APP_API_URL + device.img}
                            className="card-img-top m-2"
                            alt="Device"
                            style={{height: "14rem", width: "14rem"}}
                        />
                        <div className="card-body d-flex justify-content-center">
                            <div className={'text-decoration-none text-primary'}>
                                <h5 className="card-title mb-0">
                                    {device.name} - {device.price}
                                </h5>
                                 <p>
                                     Amount: {device.count+1}
                                 </p>
                            </div>
                        </div>
                    </a>
                    <div>
                        <button onClick={() => device.count++}>+</button>
                        <button onClick={() => deleteFromCart(device.id)}>Delete</button>
                        <button onClick={() => device.count-1}>-</button>
                    </div>
                </div>
                )
            }
        </div>
    );
});

export default Basket;
