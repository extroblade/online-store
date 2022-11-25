import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import CreateType from "../components/modals/createType";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import DeleteType from "../components/modals/deleteType";

const Admin = () => {
    const [typeAddVisible, setTypeAddVisible] = useState(false);
    const [typeDelVisible, setTypeDelVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
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
                            onClick={() => setBrandVisible(true)}
                        >
                            Add brand
                        </Button>

                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setBrandVisible(true)}
                        >
                            Delete brand
                        </Button>
                    </div>

                    <div className={'d-flex'}>
                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setDeviceVisible(true)}
                        >
                            Add device
                        </Button>

                        <Button
                            className="btn btn-primary m-3 p-4"
                            style={{width: "300px"}}
                            onClick={() => setDeviceVisible(true)}
                        >
                            Delete device
                        </Button>
                    </div>


                    <CreateType show={typeAddVisible} onHide={() => setTypeAddVisible(false)}/>
                    <DeleteType show={typeDelVisible} onHide={() => setTypeDelVisible(false)}/>
                    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

                </div>
            </div>

        </div>
    );
};

export default Admin;
