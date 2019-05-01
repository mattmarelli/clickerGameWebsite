import React, { Component } from 'react';
import { program } from '@babel/types';
import './WebpageHeader.css';
import { Link } from 'react-router-dom';

class WebpageHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <React.Fragment>
                <Link to="/">
                    <div className="Header">
                        Dividend Clicker
                    </div>
                </Link>
            </React.Fragment>
        )

    }

}

export default WebpageHeader;