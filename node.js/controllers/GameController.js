import GameTable from '../table/GameTable.js';


export default {

    getAll: (req, res) => {
        GameTable.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    add: (req, res) => {
        const g = new GameTable(req.body)
        g.save()//שומר במסד
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    update: (req, res) => {
        GameTable.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((list) => { 
                res.status(200).send(list) 
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    delete: (req, res) => {
        GameTable.findByIdAndDelete(req.params.id)
            .then(() => { res.status(200).send(true) })
            .catch(() => { res.status(404).send(false) })
    },

    getbycategoryid: (req, res) => {
        GameTable.find({ "code_category": req.params.codeCategoryid })
            .then((c) => { res.status(200).send(c) })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    getbyid: (req, res) => {
        GameTable.findById( req.params.id )
            .then((c) => { res.status(200).send(c) })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },





}
