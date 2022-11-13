import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {

    const {device} = useContext(Context)
    return (
        <div className={"flex-column"}>
            <div className="list-group">

                {device.types.map(type =>
                    <button
                        className="list-group-item list-group-item-action"
                        aria-current="true"

                        key={type.id}
                    >
                        {type.name}
                    </button>
                )}
                <hr className="border border-primary border-2 opacity-75"/>
                {device.brands.map(brand =>
                    <button
                        href="#"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        onClick={() => console.log('test')}
                        key={brand.id}
                    >
                        {brand.name}
                    </button>
                )}
            </div>
        </div>
    );
});

export default TypeBar;


