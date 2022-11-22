import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {DEVICE_ROUTE} from "../utils/consts";

const Items = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className={"d-flex flex-row mb-3 flex-wrap"} >
            {device.devices.map(device =>
                <div className="card me-3 mb-3" style={{width: "12rem"}} key={device.id}>
                    <a href={DEVICE_ROUTE+'/'+device.id} style={{textDecoration: "none", color: "black"}}>
                        <img
                            src={process.env.REACT_APP_API_URL+device.img}
                            className="card-img-top m-2"
                            alt="Device"
                            style={{height: "180px", width: "180px"}}
                        />
                        <div className="card-body">
                            <div className={'text-decoration-none text-primary'}>
                                <h5 className="card-title mb-0">
                                     {device.name} {/* change to name*/}
                                </h5>
                            </div>
                            <div className={"d-flex flex-row"}>
                                <p className="card-text">Type +   rating: {device.rating}</p>
                            </div>
                        </div>
                    </a>
                </div>

            )}
        </div>
    );
});

export default Items;

