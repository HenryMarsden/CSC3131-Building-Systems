import Alpaca from '@alpacahq/alpaca-trade-api'

//alpaca
const apiKeyId = 'PKEEW4XOVG5N76LZ53J6'
const secretKey = 'yVo19cUSKyvvJAc7iWpsJRlLvn5IUB8zwNcwo9Yg'

const alpaca = new Alpaca({
    keyId: apiKeyId,
    secretKey: secretKey,
    paper: true,
    usePolygon: false
})

export default alpaca;