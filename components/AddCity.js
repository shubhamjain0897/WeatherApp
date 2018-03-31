import React from 'react';
export default class AddCity extends React.Component{
        render(){
        return(
            <div>
                <form className ="submit" onSubmit = {this.props.getWeather}>
                    <input type="text" placeholder="Enter The City" className ="add-city__input" name = "city"/>
                    <button className="button" >Get Weather</button>
                </form>
            </div>
        );
    }
};
