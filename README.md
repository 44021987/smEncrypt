### js国密加密算法使用说明
```
# 引入js
<script src="/smEncrypt.min.js"></script>

# 使用
const privateKey = ''
const encry =''
const publicKey = ''
// cipherMode默认0，为0时可不传
const cipherMode = 0

// sm2 加解密 密文04开头
const encode = smEncrypt.sm2Encrypt('测试', publicKey)
const decode = smEncrypt.sm2Decrypt(encry, privateKey)

// sm2 加解密 密文非04开头 
// 公钥私钥都必须转换成小写
const encode2 = smEncrypt.sm2.doEncrypt('测试', publicKey, cipherMode)
const decode2 = smEncrypt.sm2.doDecrypt(encode2, privateKey, cipherMode)

// sm3 加密
var sm3 = smEncrypt.sm3('sm3 test')

console.log(`sm2加密：${encode}`)
console.log(`sm2解密：${decode}`)
console.log(`sm3加密: ${sm3}`)
```
- 注意smEncrypt提供2个sm2方法，一种是开头有04的一种是没有04的，这也是为什么许多js版本加密后后台解析不出来的原因
- smEncrypt.min.js基于sm-crypto，感谢作者