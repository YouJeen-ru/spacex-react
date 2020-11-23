import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './details.css'
import Main from "../Main/Main";
import useLaunches from "../useLaunches/useLaunches";

const Details = (props) => {
    const [launch, setLaunch] = useState(null)

    const { getLaunch } = useLaunches()

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id))
    })

    console.log(launch)

    const history = useHistory();
    if (!launch) return null
    return (
        <>
            <Main/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt=""/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch?.details}</p>
                        </div>
                    </div>

                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    );
};

export default Details;