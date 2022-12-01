import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {removeOneType} from "../../http/deviceAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";

const DeleteType = observer(({show,onHide}) => {
    const {device} = useContext(Context)

    const deleteType = () => {
        if(device?.selectedType?.name){
            if (window.confirm(`Are you sure you want to delete "${device?.selectedType?.name}"?`)){
                removeOneType(device.selectedType.id)
                    .then(device.selectedType.id = null)
                    .then(() => onHide())
            } else onHide()
        } else window.alert("No type selected")
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
                    Delete type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"d-flex align-items-center justify-content-center"}>
                        <Dropdown.Toggle className={"mb-3"} style={{minWidth: "10rem"}}>
                            {device.selectedType.name || "Choose Type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger px-4 mx-2"} onClick={deleteType}> Delete </Button>
                <Button variant={"outline-success"} onClick={onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;
