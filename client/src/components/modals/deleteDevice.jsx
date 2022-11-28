import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {removeOneDevice} from "../../http/deviceAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {DEVICE_ROUTE} from "../../utils/consts";

const DeleteDevice = observer(({show,onHide}) => {
    const {device} = useContext(Context)

    const deleteDevice = () => {
        if (window.confirm(`Are you sure you want to delete "${device.selectedDevice.name}"?`)){
            removeOneDevice(device.selectedDevice.id).then(() => onHide())
        } else onHide()
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"d-flex align-items-center justify-content-center"}>
                        <Dropdown.Toggle className={"mb-3"} style={{minWidth: "10rem"}}>
                            {device.selectedDevice.name || "Choose Device"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.devices.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedDevice(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

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
                                            { device.name }

                                        </h5>
                                    </div>
                                    <div className={"d-flex flex-row"}>
                                        <p className="card-text">{device.typeId}+rating: {device.rating}</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    )}

                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger px-4 mx-2"} onClick={deleteDevice}> Delete </Button>
                <Button variant={"outline-success"} onClick={onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDevice;
