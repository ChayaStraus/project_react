import ShopTable from '../table/ShopTable.js';


export default {


    add: (req, res) => {
        const sal = new ShopTable(req.body)
        sal.save()
            .then((sal) => {
                res.status(200).send(sal)
            })
            .catch((err) => {
                res.status(404).send(err.massage)
            })
    },
//לפי קוד לקוח
    getbyid: (req, res) => {
        ShopTable.find({"codeCustomer":req.params.id})
            .then((sal) => { res.status(200).send(sal) })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },


    getbyidshop: (req, res) => {
        ShopTable.find({"_id":req.params._id})
            .then((sal) => { res.status(200).send(sal) })
            .catch((err) => {
                res.status(404).send(err.massage)
            })
    },







}