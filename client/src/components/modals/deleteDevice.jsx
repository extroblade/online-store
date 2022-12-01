import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchDevices, removeOneDevice} from "../../http/deviceAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";

const DeleteDevice = observer(({show,onHide}) => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page , 20, device.name).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])


    const deleteDevice = () => {
        if(device.selectedDevice?.name){
            if (window.confirm(`Are you sure you want to delete "${device.selectedDevice.name}"?`)){
                removeOneDevice(device.selectedDevice.id).then(onHide())
            } else onHide()
        } else window.alert("No device selected")
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
                            {device.devices.map(item =>
                                <Dropdown.Item
                                    key={"d"+item.id}
                                    onClick={() => device.setSelectedDevice(item)}
                                >
                                    {item.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
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
