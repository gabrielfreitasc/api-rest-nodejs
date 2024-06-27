import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRouter } from './routes/transactions'

export const app = fastify()

app.register(cookie) // Cadastro do módulo de cookies
app.register(transactionsRouter, { prefix: 'transactions' })
