import Coins from "../Coins";

export default function CoinList ({ filteredCoins }) {
    return(
    <>
    {filteredCoins.map(coin => {
        return (
            <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.curent_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            />
        );
    })}
    </>
);
}
