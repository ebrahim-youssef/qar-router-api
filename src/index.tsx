import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})
app.get('/api', (c) => {
  return c.json({message: 'Hello, API!'})
})

export default app
