import React, {useContext} from 'react';
import {Context} from "../index";
import {Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";

    const PagesLimit = observer(() => {
        const {device} = useContext(Context)
        const limits = [5, 10, 50, 100, 1000];
    return (

        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {device.limit}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {limits.map(limit =>
                <Dropdown.Item
                    key={limit}
                    active={device.limit === limit}
                    onClick={() => device.setLimit(limit)}
                >
                    {limit<1000 ? limit : "All"}
                </Dropdown.Item>
            )}
            </Dropdown.Menu>
        </Dropdown>

    );
});

export default PagesLimit;
