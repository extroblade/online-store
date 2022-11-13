import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Items = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className={"d-flex flex-row mb-3 flex-wrap"}>
            {device.devices.map(device =>
                <div className="card me-2 mb-2" style={{width: "12rem"}} key={device.id}>
                    <img src={device.img} className="card-img-top" alt="Device"/>
                        <div className="card-body">
                            <a href={"#"} className={'text-decoration-none  '}>
                                <h5 className="card-title mb-0">
                                    {device.name} Brand + Device
                                </h5>
                            </a>
                            <div className={"d-flex flex-row"}>
                                <p className="card-text">Type +   rating: {device.rating}</p>

                            </div>


                        </div>

                </div>
                )}

        </div>
    );
});

export default Items;

