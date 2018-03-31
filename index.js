// import React from "react";
// import ReactDOM from "react-dom";

// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

// var mountNode = document.getElementById("app");
// ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp';
import './index.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
//import 'normalize.css/normalize.css'
//import './styles/styles.scss';

ReactDOM.render(<WeatherApp/>, document.getElementById('app'));