import React from 'react';

const ForcastCard = (forcastList) => {
    return forcastList.map((item, index) => {
        const event = new Date(item.dt_txt);
        const forcastDate = event.toLocaleString('en-US');
        return (
            <div className='ForcastCard' key={index}>
                <div>
                    <div>{forcastDate} </div>
                    High: <span className='bold'>{Math.round(item.main.temp_max)}{'\xB0'} </span>
                    Low: <span className='bold'> {Math.round(item.main.temp_min)}{'\xB0'}</span>
                    <div>Skys: <span className='bold'>{item.weather[0].description} </span></div>
                </div>
                <div className="imageItem" >
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                </div>
            </div>
        );
    });
}

const DisplayForcast = ({ forcastData }) => {
    return (
        forcastData ?
            <div className='DisplayForcast'>
                <h2 className="Weather-Title">Extended Forcast</h2>
                <div>
                    {ForcastCard(forcastData.list)}
                </div>
            </div> : <div>No Extended Forcast Data</div>
    )
}

export default DisplayForcast;