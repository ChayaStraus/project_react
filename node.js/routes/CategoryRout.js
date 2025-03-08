import {Router} from 'express'
import CategoryController from '../controllers/CategoryController.js'
import bodyparther from 'body-parser'

const cr=Router();

cr.use(bodyparther.json());

cr.get('/getAll',CategoryController.getAll);
cr.post('/add',CategoryController.add);
cr.put('/update/:id',CategoryController.update);
cr.delete('/delete/:id',CategoryController.delete);

export default cr;