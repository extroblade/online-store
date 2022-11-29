import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {DEVICE_ROUTE} from "../utils/consts";

const Items = observer(() => {
    const {device} = useContext(Context)
console.log(device.totalCount)
    return (
        <div className={"d-flex flex-row mb-3 flex-wrap"} >
            {device.typeId && device.brandId && device.totalCount>0
                ?
                device.devices.map(device =>
                <div className="card me-5 mb-5" style={{width: "16rem"}} key={device.id}>
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
                                    { device.name }

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

                <div className="card" aria-hidden="true" style={{width: "15vw"}}>
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
                        <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            }

        </div>
    );
});

export default Items;

