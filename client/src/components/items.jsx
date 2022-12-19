import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {DEVICE_ROUTE} from "../utils/consts";
import PlaceholderCard from "./storePage/placeholderCard";

const Items = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className={"d-flex flex-row mb-3 flex-wrap"} >
            {device.totalCount
                ?
                device.devices.map(item =>
                    device.brands.map(brand =>
                        device.types.map(type =>
                            item.typeId && item.brandId && brand.id===item.brandId && type.id===item.typeId &&
                            <div className="card me-5 mb-5" style={{width: "16rem"}} key={"d"+item.id}>
                                <a href={DEVICE_ROUTE+'/'+item.id} style={{textDecoration: "none", color: "black"}}>
                                    <img
                                        src={process.env.REACT_APP_API_URL+item.img}
                                        className="card-img-top m-2"
                                        alt="Device"
                                        style={{height: "14rem", width: "14rem"}}
                                    />
                                    <div className="card-body">
                                        <div className={'text-decoration-none text-primary'}>
                                            <h5 className="card-title mb-0">
                                                {brand.name} {item.name}
                                            </h5>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <p className="card-text">{type.name.slice(0, -1)}, rating: {item.rating}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    )
                )
                :
                <PlaceholderCard/>
            }
        </div>
    );
});

export default Items;

