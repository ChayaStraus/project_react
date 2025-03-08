import {Router} from 'express';
import GameController from '../controllers/GameController.js';
import bodyParser from 'body-parser';

const gr=Router()
gr.use(bodyParser.json());

gr.get('/getALL',GameController.getAll);
gr.post('/add',GameController.add);
gr.put('/update/:id',GameController.update);
gr.delete('/delete/:id',GameController.delete);
gr.get('/getbycategoryid/:codeCategoryid',GameController.getbycategoryid);
// gr.get('/getbyid/:id',GameController.getbyid);



export default gr;