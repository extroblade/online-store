import React, {useContext, useEffect, useState} from 'react';
import CreateType from "../components/modals/createType";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import DeleteType from "../components/modals/deleteType";
import DeleteBrand from "../components/modals/deleteBrand";
import DeleteDevice from "../components/modals/deleteDevice";
import {observer} from "mobx-react-lite";
import FunctionButtons from "../components/adminPage/functionButtons";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";

const Admin = observer(() => {
    const [typeAddVisible, setTypeAddVisible] = useState(false);
    const [typeDelVisible, setTypeDelVisible] = useState(false);
    const [brandAddVisible, setBrandAddVisible] = useState(false);
    const [brandDelVisible, setBrandDelVisible] = useState(false);
    const [deviceAddVisible, setDeviceAddVisible] = useState(false);
    const [deviceDelVisible, setDeviceDelVisible] = useState(false);
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , 20, device.name).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [device])

    return (
        <div className={"d-flex card align-items-center justify-content-center"} style={{height: "80vh"}}>
            <div className="d-flex flex-column">
                <div>
                    <FunctionButtons onClickValue={setTypeAddVisible} text={"Add type"}/>
                    <FunctionButtons onClickValue={setTypeDelVisible} text={"Delete type"}/>
                </div>

                <div>
                    <FunctionButtons onClickValue={setBrandAddVisible} text={"Add brand"}/>
                    <FunctionButtons onClickValue={setBrandDelVisible} text={"Delete brand"}/>
                </div>

                <div>
                    <FunctionButtons onClickValue={setDeviceAddVisible} text={"Add device"}/>
                    <FunctionButtons onClickValue={setDeviceDelVisible} text={"Delete device"}/>
                </div>

                <CreateType show={typeAddVisible} onHide={() => setTypeAddVisible(false)}/>
                <DeleteType show={typeDelVisible} onHide={() => setTypeDelVisible(false)}/>
                <CreateBrand show={brandAddVisible} onHide={() => setBrandAddVisible(false)}/>
                <DeleteBrand show={brandDelVisible} onHide={() => setBrandDelVisible(false)}/>
                <CreateDevice show={deviceAddVisible} onHide={() => setDeviceAddVisible(false)}/>
                <DeleteDevice show={deviceDelVisible} onHide={() => setDeviceDelVisible(false)}/>
            </div>
        </div>
    );
});

export default Admin;
