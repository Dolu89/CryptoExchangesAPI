import Hapi from 'hapi';
import Exchanges from './const/exchanges'
import Market from './class/Market'

const server = new Hapi.Server();

server.connection( {
    port: process.env.PORT
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    
    server.route({
        method: 'GET',
        path: '/',
        handler: ( request, reply ) => {
            reply.file('./public/index.html');
        }
    });
    
    server.route({
        method: 'GET',
        path: '/getmarketcap/{exchange}',
        handler: ( request, reply ) => {
            let exchange = encodeURIComponent(request.params.exchange)
            let ret = null
            let market = new Market(exchange)

            ret = market.getMarketCap()
            
            reply(ret);
        }
    });

});

server.start(err => {
    if (err) {
        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );
    }
    console.log( `Server started at https://cryptoexchangesapi-lcourtois.c9users.io` );
});