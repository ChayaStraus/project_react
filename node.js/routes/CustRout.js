import { Router} from "express";
import CustController from "../controllers/CustController.js";
import bodyParser from "body-parser";


const c=Router()
c.use(bodyParser.json())

c.post('/add',CustController.add);
c.get('/getbynameandpass/:name/:password',CustController.getbynameandpass);

export default c;