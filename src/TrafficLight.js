// TrafficLight.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeLight, fetchDataWithDelay} from './Store/TrafficLightReducer';
import s from './TrafficLight.module.css'

const TrafficLight = () => {
    const dispatch = useDispatch();
    const currentLight = useSelector((state) => state.trafficLight.currentLight);
    const statusLoading = useSelector((state) => state.trafficLight.loading);

    const handleFetchData = () => {
        //dispatch(fetchDataWithDelay());
    };


    return (
        <div className={s.container}>
            <div className={s.section}>
                <div>{currentLight}</div>
                <button onClick={() => dispatch(changeLight())}>Change Light</button>
            </div>
            <div className={s.section}>
                <div>{statusLoading === true ? 'Loading ...' : null}</div>
                <button onClick={handleFetchData} disabled={loading}>button</button>
            </div>
            <div className={s.section}>
                <div>text</div>
                <button>button</button>
            </div>
        </div>
    );
};

export default TrafficLight;
