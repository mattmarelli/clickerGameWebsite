import React, { Component } from 'react';
import { program } from '@babel/types';
import './WebpageHeader.css';

class WebpageHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <React.Fragment>
                <div className="Header">
                    Dividend Clicker
                </div>
            </React.Fragment>
        )

    }

}

export default WebpageHeader;