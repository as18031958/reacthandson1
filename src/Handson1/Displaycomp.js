import React, { Component} from "react";
 import "./style.css";
import ClassComp from './ClassComp';
 import FunctionComp from './FunctionComp';
//  import { Component } from "react";

class Displaycomp extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            show1: false
        };
    }
    render() {
        console.log(this.state.show);
        console.log(this.state.show1);
        return (
            <div class="MainDiv">
                <div class="classbox">
                
                    {this.state.show && <ClassComp/>}
                    <button onClick={() => this.setState({ show: !this.state.show })}>ClassButton</button>
                </div>
                <div class="funcbox">
                    {this.state.show1 && <FunctionComp/>}
                    <button onClick={() => this.setState({ show1: !this.state.show1 })}>FunctionButton</button>
                </div>
            </div>
        );
    }
}
export default Displaycomp;
