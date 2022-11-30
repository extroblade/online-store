import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

//todo: add dependencies for types and brands

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup className="m-2">
            <ListGroup.Item
                className="list-group-item list-group-item-action"
                onClick={() => device.setSelectedType([])}
                style={{cursor:'pointer'}}
            >
                All
            </ListGroup.Item>

            {device.types.map(type =>
                    <ListGroup.Item
                        className="list-group-item list-group-item-action"
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        key={"t"+type.id}
                        style={{cursor:'pointer'}}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            <hr className="border border-primary border-2 opacity-75"/>

            <ListGroup.Item
                style={{cursor:'pointer'}}
                className="list-group-item list-group-item-action d-flex"
                onClick={() => device.setSelectedBrand([])}
            >
                All
            </ListGroup.Item>

                {device.brands.map(brand =>
                    <ListGroup.Item
                        style={{cursor:'pointer'}}
                        key={"b"+brand.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => device.setSelectedBrand(brand)}
                        active={brand.id === device.selectedBrand.id }
                    >
                        {brand.name}
                    </ListGroup.Item>
                )}
        </ListGroup>

    );
});

export default TypeBar;
