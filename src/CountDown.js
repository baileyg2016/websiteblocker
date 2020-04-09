import React, {Component} from 'react';
import FlipDown from './flipdown';
import './flipdown.css'
import "./CountDown.css";

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.getTimeStamp = this.getTimeStamp.bind(this);
        this.state = {
            flipdown: undefined
        };
    }

    getTimeStamp(strDate) {
        let datum = Date.parse(strDate);
        return datum / 1000;
    }

    componentDidMount() {
        let date = new Date();
        let month = date.getMonth().toString().padStart(2, '0');
        let day = String(date.getDay() + 1).toString().padStart(2, '0');
        let year = date.getFullYear();
        let dateString = month.toString() + " " + day + " " + year.toString() + " 18:00:00";
        let countdown = this.getTimeStamp(dateString);
        // console.log(typeof countdown)
        
        // var f = new FlipDown(countdown)
        // .start()
        // .ifEnded(() => {
        //     return(<div><h1 >HOORAY!</h1><p>You can now access all your websites.</p></div>)
        // })
        
        // this.setState({flipdown: f
        // });
    }

    render() {
        return (
            <div>
                <FlipDown />
            </div>
        );
    }
}

export default CountDown;