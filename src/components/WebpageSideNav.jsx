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
        var moneyOutputString = "Current Cash = $ " + this.state.money.toFixed(2)
        if (this.state.money >= 1000 && this.state.money < 1000000) {
            moneyOutputString = "Current Cash = $ " + (this.state.money / 1000).toFixed(2) + " Thousand"
        } else if (this.state.money >= 1000000) {
            moneyOutputString = "Current Cash = $ " + (this.state.money / 1000000).toFixed(2) + " Million"
        }
        var incomeOutputString = " Income = $" + this.state.incomePerUpdate.toFixed(2) + " per " + updateTime + " second"
        if (this.state.incomePerUpdate >= 100 && this.state.money < 1000000) {
            incomeOutputString = " Income = $" + this.state.incomePerUpdate.toFixed(2) / 1000 + " Thousand per " + updateTime + " second"
        } else if (this.state.incomePerUpdate >= 1000000) {
            incomeOutputString = " Income = $" + this.state.incomePerUpdate.toFixed(2) / 1000000 + " Million per " + updateTime + " second"
        }

        return(
            <React.Fragment>
                <div className="SideBar">
                    <div className="MoneyDisplay">
                        {moneyOutputString}
                        <div>
                            {incomeOutputString}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

export default WebpageSideNav;