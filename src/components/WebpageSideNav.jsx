import React, { Component } from 'react';
import './WebpageSideNav.css';

class WebpageSideNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            money: props.money,
            timeInterval: props.timeInterval,
            incomePerUpdate: props.incomePerUpdate,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ money: nextProps.money,
                        timeInterval: nextProps.timeInterval,
                        incomePerUpdate: nextProps.incomePerUpdate });  
    }

    render() {
        var updateTime = this.state.timeInterval / 1000
        return(
            <React.Fragment>
                <div className="SideBar">
                    <div className="MoneyDisplay">
                        Current Cash = ${this.state.money.toFixed(2)}
                        <div>
                            Income = {this.state.incomePerUpdate.toFixed(2)} per {updateTime} second
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

export default WebpageSideNav;