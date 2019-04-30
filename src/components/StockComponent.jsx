import React, { Component } from 'react';
import './StockComponent.css';

class StockComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            stockIndex: props.stockIndex,
            sharesOwned: props.sharesOwned,
            basePrice: props.basePrice,
            purchaseAmount: props.purchaseAmount,
            dividend: props.dividend
        }
        this.updateMoneyNegative = props.updateMoneyNegative;
        this.purchaseStock = this.purchaseStock.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
        this.calculateYeild = this.calculateYeild.bind(this);
    }

    purchaseStock(index) {
        {this.updateMoneyNegative(this.state.basePrice,index)}
    }

    calculatePrice(amount, price) {
        return amount * price
    }

    calculateYeild(amount, dividend) {
        return amount * dividend
    }

    componentWillReceiveProps(nextProps) {
        this.setState({dividend: nextProps.dividend,
                       sharesOwned: nextProps.sharesOwned});  
    }

    render() {
        return (
            <React.Fragment>
                <div className="StockDisplay">
                    <div className="nameDisplay">
                        {this.state.name}
                    </div>
                    <div className="informationDisplay">
                        <div>
                            <div>
                                shares owned = {this.state.sharesOwned}
                            </div>
                            <div>
                                dividend per share = {this.state.dividend}
                            </div>
                            <div>
                                current dividend = {this.calculateYeild(this.state.sharesOwned, this.state.dividend).toFixed(2)}
                            </div>
                        </div>
                        <button className="Button"
                        //pass in an index of zero becauase this corresponds to the index zero of the stockCountList
                        onClick={index => this.purchaseStock(Number(this.state.stockIndex))}>
                        purchase {this.state.purchaseAmount} share for ${this.calculatePrice(this.state.purchaseAmount, this.state.basePrice)}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}





export default StockComponent