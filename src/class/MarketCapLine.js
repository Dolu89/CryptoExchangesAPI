class MarketCapLine{
    
    constructor(symbol, name, priceUsd, circulatingSupply, volume24, change24){
        this.symbol = symbol
        this.name = name
        this.priceUsd = priceUsd
        this.circulatingSupply = circulatingSupply
        this.volume24 = volume24
        this.change24 = change24
    }
    
    getJson(){
        return JSON.stringify({
            symbol : this.symbol,
            name : this.name,
            priceUsd : this.priceUsd,
            circulatingSupply : this.circulatingSupply,
            volume24 : this.volume24,
            change24 :this. change24
        });
    }
    
}

module.exports = MarketCapLine;