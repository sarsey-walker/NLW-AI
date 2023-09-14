import {fastify} from 'fastify'
import { prisma } from './lib/prisma'

const port = 3333
const app = fastify()

app.get('/', () => {
    return 'Hello World!'
})

app.get('/prompts', async () => {

    const prompts = await prisma.prompt.findMany()

    return prompts
})

app.listen({
    port: port
}).then(() => {
    console.log(`HTTP Server Running! \nServer is up on http://localhost:${port}`)
})