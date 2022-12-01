import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchBrands, fetchTypes} from "../http/deviceAPI";

const Items = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    return (
        <div className={"d-flex flex-row mb-3 flex-wrap"} >
            {device.totalCount
                ?
                device.devices.map(device =>
                    device.typeId && device.brandId &&
                    <div className="card me-5 mb-5" style={{width: "16rem"}} key={"d"+device.id}>
                        <a href={DEVICE_ROUTE+'/'+device.id} style={{textDecoration: "none", color: "black"}}>
                            <img
                                src={process.env.REACT_APP_API_URL+device.img}
                                className="card-img-top m-2"
                                alt="Device"
                                style={{height: "14rem", width: "14rem"}}
                            />
                            <div className="card-body">
                                <div className={'text-decoration-none text-primary'}>
                                    <h5 className="card-title mb-0">
                                        {device.name }
                                    </h5>
                                </div>
                                <div className={"d-flex flex-row"}>
                                    <p className="card-text">{device.typeId} rating: {device.rating}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
                :
                <div className="card " aria-hidden="true" style={{width: "10em", cursor: "wait"}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <button tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></button>
                    </div>
                </div>
            }
        </div>
    );
});

export default Items;

