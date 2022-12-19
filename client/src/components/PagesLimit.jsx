import React, {useContext} from 'react';
import {Context} from "../index";
import {Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";

    const PagesLimit = observer(() => {
        const {device} = useContext(Context)
        const lim = [1, 5, 10, 50, 100, device.totalCount];
        const limits = lim.sort((a,b) => a-b).filter(i => i<=device.totalCount)
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {device.limit!==device.totalCount ? device.limit : device.totalCount}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {limits.map(limit =>
                <Dropdown.Item
                    key={limit}
                    active={device.limit === limit}
                    onClick={() => device.setLimit(limit)}
                >
                    {limit}
                </Dropdown.Item>
            )}
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default PagesLimit;
