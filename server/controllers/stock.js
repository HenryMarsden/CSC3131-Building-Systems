import request from "request";

export const getTime = async (req, res)=>{

    const TICKER = req.params.ticker;

    var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${TICKER}&apikey=63Y97MAMKGF76KSZ`;
    var stockData;

    try {
        request.get({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            try {
                if (err) {
                    console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                    console.log('Status:', res.statusCode);
                } else {
                    // data is successfully parsed as a JSON object:
                    console.log(data);
                    stockData = data;
                }
            } catch (error) {
                console.log(error);
            }
        });
        res.status(200).json(stockData);

    } catch (error) {
        console.log('Error:', error);
    }
    
}

//not clear why nescessary
export default getTime;
