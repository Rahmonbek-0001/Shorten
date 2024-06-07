import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import links from './router/links.js'

// get directory name
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// setup static folder
app.use(express.static(path.join(dirname, 'public')))

console.log(links);

// Router
app.use('/api/links', links)