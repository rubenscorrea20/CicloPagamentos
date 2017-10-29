//Importando o mongoose responsável por fazer a conexao com o mongoDB e mapeamento dos objetos
//do documento do banco
const mongoose = require('mongoose')

//exportando o objeto de conexao com o mongodb
module.exports = mongoose.connect('mongodb://localhost/db_finance')

//(node:1732) DeprecationWarning: Mongoose: mpromise (mongoose's default promise
//library) is deprecated, plug in your own promise library instead:
//http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

//declarando a mensagem de erro para valores requiridos
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
//declarando a mensagem de erro para valores minimos e máxmos
mongoose.Error.messages.Number.min = "O '{VALUE}' informado 'e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado 'e maior que o limite maximo de '{MAX}'."

//declarando a mensagem de erro para status
mongoose.Error.messages.String.enum  = "O '{VALUE}' nao 'e valido para o atributo '{PATH}'."


