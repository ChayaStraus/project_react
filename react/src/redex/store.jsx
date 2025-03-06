
import {combineReducers, createStore} from 'redux'; 
import { datacategoryreducer, dataCategoryReducer } from "./reducer/datacategoryreducer";
import { datagamereducer, dataGameReducer } from "./reducer/datagamereducer";
import{ datacartreducer } from './reducer/datacartreducer';
import {datacostreducer} from './reducer/datacostreducer'

import {datacostreducerr}from './reducer/datashopreducer';

const reducer=combineReducers({datacategoryreducer,datagamereducer,datacartreducer,datacostreducer,datacostreducerr});





export const store=createStore(reducer)
window.store=store