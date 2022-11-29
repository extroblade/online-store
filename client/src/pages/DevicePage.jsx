import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchOneDevice} from "../http/deviceAPI";
import PictureDiv from "../components/devicepage/PictureDiv";
import BotSections from "../components/devicepage/BotSections";
import PropsAndDesc from "../components/devicepage/PropsAndDesc";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
    <div style={{backgroundColor: "#f6f6f6", minHeight: "80vh"}}>
        <div className={" mx-5 p-3"}>
            <div className={"d-flex mx-4 my-3"}>
                <div className={" flex-column"} style={{width: '81vw'}}>
                    <div>
                        <h2>
                            {device.name}
                        </h2>
                    </div>
                    <PictureDiv/>
                </div>
            </div>

            <div className={"d-flex"} style={{width: '83vw'}} >
                <BotSections/>
                <PropsAndDesc/>

            </div>
        </div>
    </div>

    );
};

export default DevicePage;
