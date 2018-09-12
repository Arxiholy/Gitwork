import React, { Component } from 'react';
import './main.css';

class App extends Component {

    first(){
		fetch("https://api.tfl.gov.uk/Line/Route")
		  .then(res => res.json())
		  .then(
			(result) => {

				var newWin = window.open('Way');
				newWin.document.write("Маршруты<br><br>");
				for (var i = 0; i < result.length; i++) {
					newWin.document.write(result[i].name,"<br>");
				}
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )        
    };

    second(){
		fetch("https://api.tfl.gov.uk/line/24/stoppoints")
		  .then(res => res.json())
		  .then(
			(result) => {

				var newWin = window.open('Stopspoints');
				newWin.document.write("Остановки<br><br>");
				for (var i = 0; i < result.length; i++) {
					newWin.document.write(result[i].commonName,"<br>");
				}
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )        
    };
	
    render() {
        return (
            <div className="box">
                <h1>Time is {new Date().toLocaleTimeString()}</h1>
                <h1 className="text">{this.props.Task}</h1>
                <button onClick={this.first} className="btn light">{this.props.Way}</button>
                <button onClick={this.second} className="btn red">{this.props.Stopspoints}</button>
            </div>			
        );

    }
};

export default App;