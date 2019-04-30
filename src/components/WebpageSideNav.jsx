import React, { Component } from 'react';
import './WebpageSideNav.css';

class WebpageSideNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            money: props.money
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ money: nextProps.money });  
    }

    render() {
        return(
            <React.Fragment>
                <div className="SideBar">
                    <div className="MoneyDisplay">
                        Current Cash = ${this.state.money.toFixed(2)}
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

export default WebpageSideNav;