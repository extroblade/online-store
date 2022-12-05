import React from 'react';
import {Breadcrumb} from "react-bootstrap";

const BreadCrumbs = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                Item
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumbs;
