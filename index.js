
import {sm2, sm3, sm4} from 'sm-crypto'


const sm2Encrypt = (msg, publicKey, cipherMode = 0) => {
  return '04' + sm2.doEncrypt(msg, publicKey, cipherMode)
}

const sm2Decrypt = (encry, privateKey, cipherMode = 0) => {
  const encrycopy = encry.toLowerCase().replace(/^04/, '')
  return sm2.doDecrypt(encrycopy, privateKey.toLowerCase(), cipherMode)
}

export const smEncrypt = {
  sm2Encrypt,
  sm2Decrypt,
  sm2,
  sm3,
  sm4
}