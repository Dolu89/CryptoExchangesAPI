import axios from 'axios'
import MarketCapLine from '../MarketCapLine'

class CoinMarketCap{
    
    async getMarketCap(){
        let marketCapLines = this.getMarketCapLines();
        return marketCapLines
    }
    
    async getMarketCapLines(){
        let url = 'https://api.coinmarketcap.com/v1/ticker/'
        let response = await axios.get(url)
        let coins = response.data
        let listedCoins = []
        for (let currentCoin in coins) {
            let current = coins[currentCoin]
            
            let priceUsd = current.price_usd
            let circulatingSupply = current.available_supply
            let volume24 = current['24h_volume_usd']
            let change24 = current.percent_change_24h
            listedCoins.push(new MarketCapLine(current.symbol, current.name, priceUsd, circulatingSupply,volume24,change24))
        }
        return listedCoins
    }
    
    //coinmarketcap provide prices itself. We don't need getBitcoinPriceUsd()

}

module.exports = CoinMarketCap;