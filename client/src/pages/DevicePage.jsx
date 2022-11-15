import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    console.log(id)

    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (

        <div className={"m-0 p-3"} style={{backgroundColor: "#f6f6f6", minHeight: "80vh"}}>
            <div className={"d-flex mx-4 my-3"}>
                <div className={" flex-column"} style={{minWidth: '56rem'}}>
                    <div>
                        <h2>{device.name}</h2>
                    </div>
                    <div className={"d-flex card flex-row p-3"} >
                        <div className={"card"} >
                            <img src={"http://localhost:5000/"+device.img} style={{width: '20rem'}} alt={"saa"}/>
                        </div>
                        <div className={"d-flex flex-column mx-3"}>
                            <div> Buttons(ll add later) </div>
                            <div className={"card d-flex flex-column my-3 p-2"} style={{boxShadow: "0 8px 24px rgb(0 0 0 / 12%)"}    }>
                                <div className={" d-flex flex-row "}>
                                    <div>
                                        {device.price}$
                                    </div>
                                    <button>
                                        Buttons(ll add later)
                                    </button>
                                    <button>
                                        Buttons(ll add later)
                                    </button>
                                </div>
                                <div>
                                    colorButtons(ll add later)
                                </div>
                                <div>
                                    avilableButtons(ll add later)
                                </div>
                            </div>

                            <div className={"card"}> Adds </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"d-flex "}>
                <div className={"card mx-4 px-3"}>
                    Buttons(ll add later)
                </div>
                <div className={"card"}>
                    <div className={"py-1 px-2 "}>
                        Характеристики {device.name}
                    </div>

                    {device.info.map((info, index) =>
                        <div className={"d-flex flex-row"} style={{ background: index % 2 === 0 ? '#f6f6f6' : 'transparent'}}>
                            <div className=" m-3" key={info.id} style={{minWidth: '700px', borderBottom: "1px dotted #ddd"}}>
                                {info.title}
                            </div>
                            <div className=" m-3 p-3">
                                {info.description}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default DevicePage;