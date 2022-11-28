import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import TypeBar from "../components/TypeBar";
import Items from "../components/items";
import PagesNum from "../components/PagesNum";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import PagesLimit from "../components/PagesLimit";

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1 , 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <div style={{minHeight: "75vh"}}>
            <div className={"container-fluid d-flex mt-2"}>
                <TypeBar/>
                <div className={"m-5"} style={{height: "70vh"}}>
                    <div className={"d-flex flex-row mb-5 mx-5"}>
                        <Items/>
                    </div>
                </div>
            </div>
            <PagesNum/>
            <PagesLimit/>
        </div>

    );
});

export default Shop;
