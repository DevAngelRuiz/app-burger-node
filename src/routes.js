/* eslint-disable prettier/prettier */
import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "hei"})

})

export default routes 