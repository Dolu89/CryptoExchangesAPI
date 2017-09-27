import Exchanges from '../const/exchanges'

import Bittrex from './exchanges/Bittrex'
import Poloniex from './exchanges/Poloniex'
import CoinMarketCap from './exchanges/CoinMarketCap'

class Market{
    
    constructor(exchange){
        this.exchange = exchange
    }
    
    getMarketCap(){
        let ret = null
        
        if (this.exchange === Exchanges.bittrex) {
            let bittrex = new Bittrex()
            ret = bittrex.getMarketCap()
        }
        else if (this.exchange === Exchanges.poloniex) {
            let poloniex = new Poloniex()
            ret = poloniex.getMarketCap()
        }
        else if (this.exchange === Exchanges.coinmarketcap) {
            let coinmc = new CoinMarketCap()
            ret = coinmc.getMarketCap()
        }
        else{
            ret = {error:true, message:'Exchange not supported'};
        }
        
        return ret
    }
    
}

module.exports = Market;