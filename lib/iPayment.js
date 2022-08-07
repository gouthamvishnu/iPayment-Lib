var bashKey = "";
var publicKey = "";
var privateKey = "";
const balanceApiUrl = "https://api.i-payments.site/v1/balance/";
const priceUrl = "https://api.i-payments.site/check/price/";
const setPublicKey = (key) => {
    Bot.setProperty(publicKey + "pubKey", key, "string")
}

const setPrivateKey = (key) => {
    Bot.setProperty(privateKey + "pvtKey", key, "string")
}

const setBashkey = (key) => {
    Bot.setProperty(bashKey + "key", key, "string")
}

const checkBashkey = () => {
    let key = Bot.getProperty("key")
    if (key === "" || !key) {
        Bot.sendMessage("Bash key is not setuped yet you must need to setup")
    }
    return key;
}

const checkKeys = () => {
    let pubKey = Bot.getProperty("pubKey");
    let pvtKey = Bot.getProperty("pvtKey");

    if (!pubKey || !pvtKey) {
        Bot.sendMessage("Public key and Private key not found please setup")
    }
    return {
        pubKey,
        pvtKey
    }
}

const getPrice = (to, from, amt) => {
    var bash = checkBashkey();
    if (!(to) || !(from) || !(amt)) {
        Bot.sendMessage("Please use correct format!")
    } else {
        HTTP.get({
            url: `${priceUrl}?key=${bash}&from=${from}&to=${tp}&amo=${amt}`,
            success: "getDetails"
        })
    }
}

const getDetails = () => {
    Bot.sendMessage(content);
}