import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../../http/deviceAPI";

const PictureDiv = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()


    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div className={"d-flex card flex-row p-3"} style={{width: '100em'}}>
            <div className={"card"}>
                <img src={process.env.REACT_APP_API_URL+device.img} style={{width: '35em'}} alt={"device"}/>
            </div>
            <div className={"d-flex flex-column mx-3"}>
                <div className={"d-flex flex-row mx-3"}>
                    {device.info.map(info =>
                        <div>
                            {info.description ? info.description+',' :
                                device.name
                            }
                        </div>
                    )}
                    &nbsp;
                    {device.info.length>0 ? <a href={"#characteristics"}>more info:</a> : <div>No info</div> }
                </div>
                <div className={"card d-flex flex-column my-3 p-3"} style={{boxShadow: "0 8px 24px rgb(0 0 0 / 12%)"}}>
                    <div className={" d-flex flex-row "}>
                        <div>
                            {device.price}₽
                        </div>
                        <button>
                            &lt;3
                        </button>
                        <button>
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <span>Color (Mock colors):</span>
                        <button style={{backgroundColor: "blue"}} className="rounded-circle"/>
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
