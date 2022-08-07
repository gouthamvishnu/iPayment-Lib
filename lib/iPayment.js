var bashKey = ""
let libPrefix = "iPayments"
var publicKey = ""
var privateKey = ""
const depositApi = "https://api.i-payments.site/v2/deposit" 
const addressUrl = "https://api.i-payments.site/v2/build" 
const balanceApiUrl = "https://api.i-payments.site/v2/balance/"
const priceUrl = "https://api.i-payments.site/check/price/"
const transferApi = "https://api.i-payments.site/v2/transfer/"
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
  if (!key) {
    throw new Error("libError: no bashKeyfound. You need to set it")
    //Bot.sendMessage("Bash key is not setuped yet you must need to setup")
  }
  return key
}

const checkKeys = () => {
  let pubKey = Bot.getProperty("pubKey")
  let pvtKey = Bot.getProperty("pvtKey")

  if (!pubKey){ throw new Error("libError: no private key found. You need to set it") }
  if (!pvtKey){ throw new Error("libError: no private key found. You need to set it") }
  return {
    pubKey,
    pvtKey
  }
}

const getPrice = (from, to, amt) => {
  var bash = checkBashkey()
  if (!(from) || (!to) || (!amt)) {
    Bot.sendMessage("Please use correct format!")
  } else {
    HTTP.get({
      url: `${priceUrl}?key=${bash}&from=${from}&to=${to}&amo=${amt}`,
      success: libPrefix + 'getResponse'
    })
  }
}

const getResponse = () => {
  Bot.sendMessage("" + content)
}

const getResult = () => {
  Bot.sendMessage("" + content)
}

const balance = () => {
  Bot.sendMessage("" + content)
}

const res = () => {
  Bot.sendMessage("" + content)
}

const transfer = () => {
  Bot.sendMessage("" + content)
}


const getAddress = (cur) => {
  const keys = checkKeys()
  const pvt = keys.pvtKey
  const pub = keys.pubKey
  if(!cur){
  Bot.sendMessage("please use correct format")
  return
}
HTTP.get({
  url:`${addressUrl}/?PrivateKey=${pvt}&PublicKey=${pub}&Currency=${cur}`,
  success: libPrefix + 'getResult'
})
}

const getBalance = (cur) => {
  const keys = checkKeys()
  const pvt = keys.pvtKey
  const pub = keys.pubKey
  if(!cur){
  Bot.sendMessage("please use correct format")
  return
}
HTTP.get({
  url:`${balanceApiUrl}/?PrivateKey=${pvt}&PublicKey=${pub}&Currency=${cur}`,
  success: libPrefix + 'balance'
})
}

const transferToken = (cur,amt,to) => {
  const keys = checkKeys()
  const pvt = keys.pvtKey
  const pub = keys.pubKey
  if((!cur) || (!amt) || (!to)){
  Bot.sendMessage("please use correct format")
  return
}
HTTP.get({
  url:`${transferApi}/?PrivateKey=${pvt}&PublicKey=${pub}&Currency=${cur}&Amount=${amt}&To=${to}`,
  success: libPrefix + 'transfer'
})
}

const checkDepo = (cur,pvt_key) => {
  const keys = checkKeys()
  const pvt = keys.pvtKey
  const pub = keys.pubKey
  if((!cur) || (!pvt_key)){
  Bot.sendMessage("please use correct format")
  return
}
HTTP.get({
  url:`${depositApi}/?PrivateKey=${pvt}&PublicKey=${pub}&Currency=${cur}&Pkey=${pvt_key}`,
  success: libPrefix + 'res'
})
}

