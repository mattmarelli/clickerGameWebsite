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
            timeInterval: props.timeInterval,
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
                    <StockComponent name="Business-1"
                                    sharesOwned={this.state.stockCount[0]}
                                    stockIndex='0'
                                    basePrice={this.state.basePrice[0]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[0]}>
                    </StockComponent>
                    <StockComponent name="Business-2"
                                    sharesOwned={this.state.stockCount[1]}
                                    stockIndex='1'
                                    basePrice={this.state.basePrice[1]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[1]}>
                    </StockComponent>
                    <StockComponent name="Business-3"
                                    sharesOwned={this.state.stockCount[2]}
                                    stockIndex='2'
                                    basePrice={this.state.basePrice[2]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[2]}>
                    </StockComponent>
                    <StockComponent name="Business-4"
                                    sharesOwned={this.state.stockCount[3]}
                                    stockIndex='3'
                                    basePrice={this.state.basePrice[3]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[3]}>
                    </StockComponent>
                    <StockComponent name="Business-5"
                                    sharesOwned={this.state.stockCount[4]}
                                    stockIndex='4'
                                    basePrice={this.state.basePrice[4]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[4]}>
                    </StockComponent>
                    <StockComponent name="Business-6"
                                    sharesOwned={this.state.stockCount[5]}
                                    stockIndex='5'
                                    basePrice={this.state.basePrice[5]}
                                    purchaseAmount={this.state.purchaseAmount}
                                    updateMoneyNegative={this.updateMoneyNegative}
                                    dividend={this.state.baseDividend[5]}>
                    </StockComponent>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage