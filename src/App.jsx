import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebpageHeader from './components/WebpageHeader';
import WebpageSideNav from './components/WebpageSideNav';
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super(props)
        this.state = {
          money: 0.0,
          basePrice: [1,2000,10000,1000000,100000000],  // base price for purchasing all 5 teirs of stocks
          baseDividend: [.01,.11,1.2,25,312,4050,.07,.08,.09,.10,.11,.12,.13,.14,.15],            // base yeild for each teir of stock
          stockCount: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // stock count.  3 counts for each tier 15 in total
          purchaseAmount: 1,
          timeInterval: 1000,
          incomePerUpdate: 0,
        }
        this.updateMoneyPositive = this.updateMoneyPositive.bind(this) 
        this.updateMoneyNegative = this.updateMoneyNegative.bind(this)
        this.updateMoney = this.updateMoney.bind(this)
      }
  //click to produce money
  updateMoneyPositive(newAmount) {
    var temp = this.state.money
    this.setState ({
      money: temp + newAmount
    });
  }
  //spend money on puchasing a stock
  updateMoneyNegative(newAmount, index) {
    var temp = this.state.money
    if (this.state.purchaseAmount * newAmount <= temp) {
      this.state.stockCount[index] += this.state.purchaseAmount
      this.setState ({
        money: temp - (this.state.purchaseAmount * newAmount),
      });
    }
  }
  // update money from all the stocks yeilding money
  updateMoney() {
    var sum = 0
    for (var i = 0; i < this.state.stockCount.length; i++) {
      if (this.state.stockCount[i] > 0) {
        sum += this.state.stockCount[i] * this.state.baseDividend[i]
      }
    }
    this.setState ({
      incomePerUpdate: sum,
      money: this.state.money + sum
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <WebpageHeader/>
          <WebpageSideNav money={this.state.money}
                          timeInterval={this.state.timeInterval}
                          incomePerUpdate={this.state.incomePerUpdate}/>
          <Switch>
            <Route exact path="/">
              <HomePage updateMoneyPositive={this.updateMoneyPositive}
                        updateMoneyNegative={this.updateMoneyNegative} 
                        updateMoney={this.updateMoney}
                        purchaseAmount={this.state.purchaseAmount}
                        timeInterval={this.state.timeInterval}
                        stockCount={this.state.stockCount}
                        baseDividend={this.state.baseDividend}
                        basePrice={this.state.basePrice}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
