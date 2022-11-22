import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../../http/deviceAPI";

const PictureDiv = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    console.log(id)

    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div className={"d-flex card flex-row p-3"} >
            <div className={"card"} >
                <img src={"http://localhost:5000/"+device.img} style={{width: '20rem'}} alt={"saa"}/>
            </div>
            <div className={"d-flex flex-column mx-3"}>
                <div> Buttons(ll add later) </div>
                <div className={"card d-flex flex-column my-3 p-2"} style={{boxShadow: "0 8px 24px rgb(0 0 0 / 12%)"}    }>
                    <div className={" d-flex flex-row "}>
                        <div>
                            {device.price}₽
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
                        availableButtons(ll add later)
                    </div>
                </div>

                <div className={"card"}> Adds </div>
            </div>
        </div>
    );
};

export default PictureDiv;