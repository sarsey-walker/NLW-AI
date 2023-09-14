import {fastify} from 'fastify'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const port = 3333
const app = fastify()

app.register(getAllPrompts)
app.register(uploadVideoRoute)

app.listen({
    port: port
}).then(() => {
    console.log(`HTTP Server Running! \nServer is up on http://localhost:${port}`)
})