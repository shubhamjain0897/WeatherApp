import React from 'react';
export default class Weather extends React.Component{

        render(){
        return(
            <div className = "  weather_info ">
               {this.props.Location && <p className = "weather__key">Location :  <span className = "weather__value">{this.props.location} </span></p>}
               {this.props.temperature && <p className = "weather__key">Temperature : <span className = "weather__value">{this.props.temperature} Celcius </span></p>}
               {this.props.humidity && <p className = "weather__key">Humidity : <span className = "weather__value">{this.props.humidity}% </span></p>}
               {this.props.WindSpeed && <p className = "weather__key">Wind Speed :  <span className = "weather__value">{this.props.WindSpeed} </span></p>}
               {this.props.condition && <p className = "weather__key">Condition : <span className = "weather__value">{this.props.condition}  </span> </p> }  
               {this.props.error && <p className = "weather__key">{this.props.error}</p> }                         
            </div>
        );
    }
};
