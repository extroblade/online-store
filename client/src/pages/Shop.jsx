import React from 'react';
import {observer} from "mobx-react-lite";
import TypeBar from "../components/TypeBar";
import Items from "../components/items";
import PagesNum from "../components/PagesNum";

const Shop = observer(() => {
    return (
        <div style={{minHeight: "75vh"}}>
            <div className={"container-fluid d-flex mt-2"}>
                <TypeBar/>
                <div className={"flex-column mt-2"}>

                    <div className={"mx-5 mb-2"}>
                        <button type="button" className="btn btn-primary">Name</button>
                    </div>

                    <div className={"d-flex flex-row mb-5 mx-5"}>
                        <Items/>
                    </div>

                    <PagesNum/>
                </div>
            </div>
        </div>
    );
});

export default Shop;