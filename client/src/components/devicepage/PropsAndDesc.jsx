import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../../http/deviceAPI";

const PropsAndDesc = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
    <div className={"card"}>
        <div className={"py-2 px-3 mx-2"}>
            Характеристики {device.name}
        </div>

        {device.info.map((info, index) =>
            <div className={"d-flex flex-row align-items-center"} style={{ background: index % 2 === 0 ? '#eeeeee' : 'transparent'}}>
                <div className=" my-3 mx-5" key={info.id} style={{minWidth: '50vw', borderBottom: "1px dotted #ddd"}} id="characteristics">
                    {info.title}
                </div>
                <div className=" m-3 p-3">
                    {info.description}
                </div>
            </div>
        )}
    </div>
    );
};

export default PropsAndDesc;
