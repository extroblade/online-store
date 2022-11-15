import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createDevice, createType, fetchBrands, fetchTypes} from "../../http/deviceAPI";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
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
                    Add new device
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
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"d-flex align-items-center justify-content-center"}>
                        <Dropdown.Toggle className={"mb-4"} style={{minWidth: "10rem"}}>
                            {device.selectedBrand.name || "Choose Brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className={"p-3 mb-2"}
                        placeholder={"Enter device name"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={"p-3 mb-2"}
                        placeholder={"Enter price"}
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />

                    <Form.Control
                        className={"p-3 mb-2 "}
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark mb-3"}
                        onClick={() => addInfo()}
                    >
                        Add new property
                    </Button>
                    {info.map(i =>
                        <Row className={"mt-3"} key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => {
                                        changeInfo('title', e.target.value, i.number)
                                        }
                                    }
                                    placeholder={"Enter prop's name"}
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => {
                                        changeInfo('description', e.target.value, i.number)

                                    }}
                                    placeholder={"Enter prop's description"}
                                />
                            </Col>

                            <Col md={4}>
                                <Button
                                    variant={"outline-danger"}
                                    onClick={() => removeInfo(i.number)}
                                >   Delete property </Button>
                            </Col>
                        </Row>

                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success px-4 mx-2"} onClick={addDevice}> Add </Button>
                <Button variant={"outline-danger px-4 mx-2"} onClick={onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;