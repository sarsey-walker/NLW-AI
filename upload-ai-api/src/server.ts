import {fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcriptions'

const port = 3333
const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPrompts)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
    port: port
}).then(() => {
    console.log(`HTTP Server Running! \nServer is up on http://localhost:${port}`)
})