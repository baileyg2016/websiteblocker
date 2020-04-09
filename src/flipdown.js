import React, { Component } from 'react';
// import './flipdown.css';

class FlipDown extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            uts: undefined,
            el: 'flipdown',
            opt: {},
            version: '0.2.2',
            initialized: false,
            now: undefined,
            epoch: undefined,
            countdownEnded: false,
            hasEndedCallback: false,
            rotors:  [],
            rotorLeafFront:  [],
            rotorLeafRear:  [],
            rotorTops:  [],
            rotorBottoms:  [],
            countdown:  null,
            daysRemaining: 0,
            clockValues: {},
            clockStrings: {},
            clockValuesAsString: [],
            prevClockValuesAsString: []
        }
    }

    componentDidMount() {
        // this.setState({
        //     uts: undefined,
        //     el: 'flipdown',
        //     opt: this._parseOptions(this.props.opts),
        //     version: '0.2.2',
        //     initialized: false,
        //     now: undefined,
        //     epoch: undefined,
        //     countdownEnded: false,
        //     hasEndedCallback: false,
        //     rotors:  [],
        //     rotorLeafFront:  [],
        //     rotorLeafRear:  [],
        //     rotorTops:  [],
        //     rotorBottoms:  [],
        //     countdown:  null,
        //     daysRemaining: 0,
        //     clockValues: {},
        //     clockStrings: {},
        //     clockValuesAsString: [],
        //     prevClockValuesAsString: []
        // })
    }
    render() {
        return (
          <div id="flipdown" className="flipdown flipdown__theme-dark">

            {/* <!-- start rotor group for days --> */}
        
            <div className="rotor-group">
                <div className="rotor-group-heading">
        
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                
            </div>
        
            {/* <!-- end rotor group for days--> */}
        
            {/* <!-- start rotor group for hours --> */}
        
            <div className="rotor-group">
                <div className="rotor-group-heading">
        
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                
            </div>
        
            {/* <!-- end rotoor group for hours --> */}
        
        
            {/* <!-- start rotor group for minutes --> */}
        
            <div className="rotor-group">
                <div className="rotor-group-heading">
        
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                
            </div>
        
            {/* <!-- end rotoor group for minutes --> */}
        
        
            {/* <!-- start rotor group for seconds --> */}
        
            <div className="rotor-group">
                <div className="rotor-group-heading">
        
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                <div className="rotor">
                    <div className="rotor-leaf">
                        <figure className="rotor-leaf-rear">
                            0
                        </figure>
                        <figure className="rotor-leaf-front">
                            0
                        </figure>
                    </div>
                    <div className="rotor-top">
                        0
                    </div>
                    <div className="rotor-bottom">
                        0
                    </div>
                </div>
                
            </div>
        
            {/* <!-- end rotoor group for seconds --> */}
          </div>
        );
    }
}

export default FlipDown;