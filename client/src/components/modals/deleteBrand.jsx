import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {removeOneBrand} from "../../http/deviceAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";

const DeleteBrand = observer(({show,onHide}) => {
    const {device} = useContext(Context)

    const deleteBrand = () => {
        if(device?.selectedBrand?.name) {
            if (window.confirm(`Are you sure you want to delete "${device.selectedBrand.name}"?`)) {
                removeOneBrand(device.selectedBrand.id).then(() => onHide())
            } else onHide()
        } else window.alert("No brand selected")
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
                    Delete brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"d-flex align-items-center justify-content-center"}>
                        <Dropdown.Toggle className={"mb-3"} style={{minWidth: "10rem"}}>
                            {device.selectedBrand.name || "Choose Brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger px-4 mx-2"} onClick={deleteBrand}> Delete </Button>
                <Button variant={"outline-success"} onClick={onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteBrand;
