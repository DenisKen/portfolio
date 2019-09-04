import React, {Component} from 'react';
import './HUD_Html.css';

import HUD_ViewItem from './HUD_ViewItem';



class HUD_Html extends Component {

    styleInteract = {
        pointerEvents: 'none'
    }
    constructor(props){
        super(props);   
        
        this.teste();
    }

    teste = () => {
        console.log(this.refs);
    }
    changeSubtitle = () =>{
        console.log("changed subtitle");
    }

    render(props){
        return(
            <div  style={this.styleInteract} className="HUD_Html-Content">
                <HUD_ViewItem ref="HUDViewItem"
                    callBackViewItem_ChangedImage={this.props.callBackViewItem_ChangedImage}
                    callBackViewItem_Close = {this.props.callBackViewItem_Close}
                />
                <div className="HUD_Html-Subtitle">
                    <p> {this.props.text} </p>
                </div>
            </div>
        )
    }
}

export default HUD_Html;