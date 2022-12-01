 import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , 20, device.name).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])


    const cart = []
    const cart2 = []
    let i = 0;
    device.devices.map(dev => {
        cart.push(JSON.parse(window.localStorage.getItem(`device${dev.id}`)))
        if(!cart[i]){
            cart.pop()
        } else {
            i++
        }
    })
    cart.map(device => {
        device.map(t => {
            cart2.push(t)
        })

    })
    const basketDevices = cart2

    let totalPrice = 0

    basketDevices.map(d => {
        totalPrice += d.price;
    })


    return (
        <div className={"d-flex flex-column align-items-center m-5"}>

            {basketDevices &&
                <div>
                TotalPrice - {totalPrice}
                </div>
            }

            {basketDevices &&
            basketDevices.map(device =>
                <div className="card me-5 mb-5" style={{width: "16rem"}} key={"d" + device.id}>
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
                            </div>
                        </div>
                    </a>
                </div>
                )
            }
        </div>
    );
});

export default Basket;
