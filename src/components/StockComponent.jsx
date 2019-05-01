import React, { Component } from 'react';
import './StockComponent.css';
import { Link } from 'react-router-dom';

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
        // output for dividend per share
        var dividendPerShare = "dps = " + this.state.dividend
        if (this.state.dividend >= 1000 && this.state.dividend < 1000000) {
            dividendPerShare = "dps = " + this.state.dividend / 1000 + " Thousand"
        } else if (this.state.dividend >= 1000000) {
            dividendPerShare = "dps = " + this.state.dividend / 1000000 + " Million"
        }
        // output for dividend payment
        var temp = this.calculateYeild(this.state.sharesOwned, this.state.dividend).toFixed(2)
        var outputDividendPayment = "cd = " + temp
        if (temp >= 1000 && temp < 1000000) {
            outputDividendPayment = "cd = " + (this.calculateYeild(this.state.sharesOwned, this.state.dividend) / 1000).toFixed(2) + " Thousand"
        } else if (temp >= 1000000) {
            outputDividendPayment = "cd = " + (this.calculateYeild(this.state.sharesOwned, this.state.dividend) / 1000000).toFixed(2) + " Million"
        }
        // output for the amount of shares owned
        var outputSharesOwned = "shares owned = " + this.state.sharesOwned
        if (this.state.sharesOwned >= 1000 && this.state.sharesOwned < 1000000) {
            outputSharesOwned = "shares owned = " + this.state.sharesOwned / 1000 + " Thousand"
        } else if (this.state.sharesOwned >= 1000000) {
            outputSharesOwned = "shares owned = " + this.state.sharesOwned / 1000000 + " Million"
        }
        // output for purchase button
        var purchaseTemp = this.calculatePrice(this.state.purchaseAmount, this.state.basePrice)
        var purchaseOutput = "buy " + this.state.purchaseAmount + " share for $" + purchaseTemp 
        if (purchaseTemp  >= 1000 && purchaseTemp < 1000000) {
            purchaseOutput = "buy " + this.state.purchaseAmount + " share for $" + purchaseTemp  / 1000 + " Thousand"
        } else if (purchaseTemp  >= 1000000) {
            purchaseOutput = "buy " + this.state.purchaseAmount + " share for $"  + purchaseTemp  / 1000000 + " Million"
        }
        // this is the path to stock information when view information button is clicked
        var linkRoute = "/businessInformation/" + this.state.name
        return (
            <React.Fragment>
                <div className="StockDisplay">
                    <div className="nameDisplay">
                        {this.state.name}
                    </div>
                    <div className="informationDisplay">
                        <div>
                            <div>
                                {outputSharesOwned}
                            </div>
                            <div>
                                {dividendPerShare}
                            </div>
                            <div>
                                {outputDividendPayment}
                            </div>
                        </div>
                        <button className="Button"
                        //pass in an index of zero becauase this corresponds to the index zero of the stockCountList
                        onClick={index => this.purchaseStock(Number(this.state.stockIndex))}>
                        {purchaseOutput}
                        </button>
                        <Link to={linkRoute} params={{name: this.state.name}}>
                            <button className="Button"
                            //pass in an index of zero becauase this corresponds to the index zero of the stockCountList
                            >
                            Veiw stock information
                            </button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}





export default StockComponent