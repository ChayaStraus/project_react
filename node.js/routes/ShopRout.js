import {Router} from 'express'
import bodyParser from 'body-parser';
import ShopController from '../controllers/ShopController.js';



const rout=Router()
rout.use(bodyParser.json())

rout.post('/add',ShopController.add)
rout.get('/getbyid/:id',ShopController.getbyid)
rout.get('/getbyidshop/:_id',ShopController.getbyidshop)



export default rout;