import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import TypeBar from "../components/TypeBar";
import Items from "../components/items";
import PagesNum from "../components/PagesNum";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import PagesLimit from "../components/PagesLimit";
import BrandBar from "../components/BrandBar";

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device, device.page, device.selectedType, device.selectedBrand, device.limit])



    return (
        <div className={"shop"}>
            <div className={"d-flex mt-2"}>
                <div className={"bars__left"}>
                    <TypeBar/>
                    <hr className="hr"/>
                    <BrandBar/>
                </div>
                <div className={"m-5"}>
                    <div className={"d-flex flex-row mb-5 mx-5"}>
                        <Items/>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-center mb-5"}>
                <PagesNum/>
                <PagesLimit/>
            </div>

        </div>

    );
});

export default Shop;
