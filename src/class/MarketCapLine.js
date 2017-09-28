class MarketCapLine{
    
    constructor(symbol, name, priceUsd, circulatingSupply, volume24, change24){
        this.symbol = symbol
        this.name = name
        this.price_usd = priceUsd
        this.circulating_supply = circulatingSupply
        this.market_cap = (circulatingSupply*priceUsd).toString()
        this.volume_24h = volume24
        this.change_24h = change24
    }

    
}

module.exports = MarketCapLine;