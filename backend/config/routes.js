//importando o express
const express = require('express')

//exportando uma função passando o server
module.exports = function(server) {

	// API Routes
	const router = express.Router()
	server.use('/api', router)

	// Rotas da API
	const billingCycleService = require('../api/billingCycle/billingCyclesService')
	billingCycleService.register(router, '/billingCycles')

	//importando a billingSummaryService de outro modulo para uso nas rotas
	const billingSummaryService = require('../api/billingSummary/billingSummaryService')

	//mapeamento da rota billingSummary
	router.route('/billingSummary').get(billingSummaryService.getSummary)
	
}