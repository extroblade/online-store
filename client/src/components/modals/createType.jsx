import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateType = observer(({show,onHide}) => {
    const {type} = useContext(Context)
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => setValue(''))
        onHide()
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
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>


                    <Form.Control
                        className={"p-3"}
                        placeholder={"Enter type's name"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateType;
