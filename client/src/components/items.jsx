import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchDevices} from "../http/deviceAPI";
import PlaceholderCard from "./storePage/placeholderCard";

const Items = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , device.limit, device.name).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device])

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
                                        {device.brandId} {device.name}
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
                <PlaceholderCard/>
            }
        </div>
    );
});

export default Items;

