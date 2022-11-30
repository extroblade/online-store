import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import CreateType from "../components/modals/createType";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import DeleteType from "../components/modals/deleteType";
import DeleteBrand from "../components/modals/deleteBrand";
import DeleteDevice from "../components/modals/deleteDevice";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {

    const [typeAddVisible, setTypeAddVisible] = useState(false);
    const [typeDelVisible, setTypeDelVisible] = useState(false);
    const [brandAddVisible, setAddBrandVisible] = useState(false);
    const [brandDelVisible, setDelBrandVisible] = useState(false);
    const [deviceAddVisible, setDeviceAddVisible] = useState(false);
    const [deviceDelVisible, setDeviceDelVisible] = useState(false);

    return (
        <div className={"d-flex card align-items-center justify-content-center"} style={{height: "90vh"}} >
            <div className={""}>
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <div className={'d-flex'}>
                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setTypeAddVisible(true)}
                        >
                            Add type
                        </Button>

                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setTypeDelVisible(true)}
                        >
                            Delete type
                        </Button>
                    </div>

                    <div className={'d-flex'}>
                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setAddBrandVisible(true)}
                        >
                            Add brand
                        </Button>

                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setDelBrandVisible(true)}
                        >
                            Delete brand
                        </Button>
                    </div>

                    <div className={'d-flex'}>
                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setDeviceAddVisible(true)}
                        >
                            Add device
                        </Button>

                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setDeviceDelVisible(true)}
                        >
                            Delete device
                        </Button>
                    </div>


                    <CreateType show={typeAddVisible} onHide={() => setTypeAddVisible(false)}/>
                    <DeleteType show={typeDelVisible} onHide={() => setTypeDelVisible(false)}/>
                    <CreateBrand show={brandAddVisible} onHide={() => setAddBrandVisible(false)}/>
                    <DeleteBrand show={brandDelVisible} onHide={() => setDelBrandVisible(false)}/>
                    <CreateDevice show={deviceAddVisible} onHide={() => setDeviceAddVisible(false)}/>
                    <DeleteDevice show={deviceDelVisible} onHide={() => setDeviceDelVisible(false)}/>

                </div>
            </div>
        </div>
    );
});

export default Admin;
