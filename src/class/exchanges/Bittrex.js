import axios from 'axios'
import MarketCapLine from '../MarketCapLine'

class Bittrex{
    
    getMarketCap(){
        let bitcoinUsdPrice = this.getBitcoinPriceUsd() 
        let marketCapLines = this.getMarketCapLines(bitcoinUsdPrice);
        return marketCapLines
    }
    
    async getMarketCapLines(bitcoinUsdPrice){
        let url = 'https://bittrex.com/api/v1.1/public/getcurrencies'
        let response = await axios.get(url)
        let coins = response.data.result
        let listedCoins = []
        for (let currentCoin in coins) {
            let current = coins[currentCoin]
            
            if (current.IsActive) {
                //todo
                let priceUsd = 0
                let circulatingSupply = 0
                let volume24 = 0
                let change24 = 0
                listedCoins.push(new MarketCapLine(current.Currency, current.CurrencyLong, priceUsd, circulatingSupply,volume24,change24))
            }
        }
        return listedCoins
    }
    
    async getBitcoinPriceUsd(){
        let url = "https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC"
        let response = await axios.get(url)
        return response.data.success ? response.data.result.Last : null
    }
}

module.exports = Bittrex;