import React, { Component } from 'react';
import './HomePage.css';
import StockComponent from './StockComponent'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickPrice: 0.05,
            basePrice: props.basePrice,
            stockCount: props.stockCount,
            baseDividend: props.baseDividend,
            purchaseAmount: props.purchaseAmount,
            timeInterval: props.timeInterval
        }
        this.clickedToUpdateMoney = this.clickedToUpdateMoney.bind(this)
        this.updateMoneyPositive = props.updateMoneyPositive;
        this.updateMoneyNegative = props.updateMoneyNegative;
        this.updateMoney = props.updateMoney;
    }

    clickedToUpdateMoney() {
        {this.updateMoneyPositive(this.state.clickPrice)}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ stockCount: nextProps.stockCount});  
    }

    componentWillMount() {
        setInterval(()=>this.updateMoney(), this.state.timeInterval)
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainDisplay">
                    <div className="clickDisplay">
                        <button className="clickForMoney"
                         onClick={this.clickedToUpdateMoney}>
                            Click for ${this.state.clickPrice}
                        </button>

                    </div>
                    <StockComponent name="Marelli's Jellies"
                                    sharesOwned={this.state.stockCount[0]}
                                    stockIndex='0'
                                    basePrice={this.state.basePrice[0]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[0]}>
                    </StockComponent>
                    <StockComponent name="Coat's Coats"
                                    sharesOwned={this.state.stockCount[1]}
                                    stockIndex='1'
                                    basePrice={this.state.basePrice[0] * 20}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[1]}>
                    </StockComponent>
                    <StockComponent name="Smith's Smiths"
                                    sharesOwned={this.state.stockCount[2]}
                                    stockIndex='2'
                                    basePrice={this.state.basePrice[0] * 500}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[2]}>
                    </StockComponent>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage