import React from 'react';
import axios from 'axios';

import InputZip from './InputZip';
import DisplayWeather from './DisplayWeather';
import DisplayForcast from './DisplayForcast';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: undefined,
            forcastData: undefined,
            zipCode: '10553',
            error: false
        };
        this.setZipCode = this.setZipCode.bind(this);
    }

    async getCurrentWeather(zipCode) {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&APPID=351c11947342128b987edce51c007c39&units=imperial`);
        return resp;
    }
    async getCurrentForcast(zipCode) {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},US&cnt=5&APPID=351c11947342128b987edce51c007c39&units=imperial`);
        return resp;
    }

    async loadApi(zipCode) {
        try {
            let [weatherData, forcastData] = await Promise.all([this.getCurrentWeather(zipCode), this.getCurrentForcast(zipCode)]);
            this.setState({
                weatherData: weatherData.data,
                forcastData: forcastData.data,
                error: false
            });
        } catch (error) {
            this.setState({ error: true });
        }
    }

    componentDidMount() {
        this.loadApi(this.state.zipCode);
    }

    setZipCode = (zipCode) => {
        this.loadApi(zipCode);
    }

    render() {
        const errorClass = (this.state.error === true ? "show" : "hide") + " errorClass";
        return (
            <React.Fragment>
                <div className={errorClass}>
                    Zip Code Error
                </div>
                <div className="WeatherWrapper">

                    <div className="UserZip">
                        <InputZip newZipCode={this.setZipCode} />
                    </div>

                    <div className="Weather">
                        <DisplayWeather weatherData={this.state.weatherData} />
                        <DisplayForcast forcastData={this.state.forcastData} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;