import React from 'react';
import AddCity from './AddCity';
import Header from './Header';
import Weather from './Weather';
import regeneratorRuntime from "regenerator-runtime";
import '../index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import "babel-polyfill";

const id_key = "d71fdc8de792b971fc967ffee8b4ac3d";
const url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=d71fdc8de792b971fc967ffee8b4ac3d&units=metric";

export default class WeatherApp extends React.Component{

    state ={
        temperature : undefined,
        location : undefined,
        humidity : undefined,
        condition : undefined,
        WindSpeed : undefined,
        error : undefined
    }
    getWeather = async (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        let result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d71fdc8de792b971fc967ffee8b4ac3d&units=metric`);
        let data = await result.json();
        if(city){
        console.log(data);
        this.setState({
            temperature : data.main.temp,
            location : data.name,
            humidity : data.main.humidity,
            WindSpeed : data.wind.speed,
            condition : data.weather[0].description,
            error : ""
        })
    }else{
        this.setState({
            temperature : undefined,
            location : undefined,
            humidity : undefined,
            WindSpeed : undefined,
            condition : undefined,
            error : "Please enter City"
    })
    }
 }
    render(){
       return(
            <div>
                <div className ="wrapper">
                    <div className = "main">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-xs-5 title-container">
                                        <Header/>
                                </div>
                                <div className = "col-xs-7 form-container">
                                <AddCity getWeather = {this.getWeather}/>
                                <Weather
                                    temperature = {this.state.temperature}
                                    location = {this.state.location}
                                    humidity = {this.state.humidity}
                                    WindSpeed = {this.state.WindSpeed}
                                    condition = {this.state.condition}
                                    error = {this.state.error}
                                />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div> 
            </div>
       );

    }
};

                