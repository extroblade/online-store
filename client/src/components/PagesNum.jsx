import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const PagesNum = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className={"mx-2 "}>
            <nav aria-label="Page navigation example" className={""}>
                <ul className="pagination mx-10">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    );
});

export default PagesNum;

