const jwt = require('jsonwebtoken');

const { crypto: config } = require('../../config')

const signOptions = {
  algorithm: 'RS256',//criação de chave privada e pública
  expiresIn: '15m' //15 minutos
}

const sign = payload => jwt.sign(payload, config.jwt.privateKey, signOptions)
/*
.decode - retorna as informações do payload
.sign - gera um jwt novo
.verify - valida a assinatura do jwt e retorna as informações do payload depois.
*/

//para a autenticação
const verify = token => new Promise((resolve, reject) =>
  jwt.verify(
    token,
    config.jwt.publicKey,
    (error, data) => error ? reject(error) : resolve(data)
  )
)

module.exports = {
  sign,
  verify,
}
