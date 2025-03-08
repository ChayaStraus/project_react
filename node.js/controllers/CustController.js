import customerTable from '../table/CustomerTable.js';




export default {
    add: (req, res) => {
        const g = new customerTable(req.body)
        g.save()//שומר במסד
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },

    
    getbynameandpass:(req,res)=>{
        customerTable.findOne({"name":req.params.name,"password":req.params.password})
        .then((g)=>{
            if(g)
                res.status(200).send(g)
            else
            res.status(200).send(null)
        })
        .catch((err)=>{
            res.status(404).send(err.message)
        })
    },
    
}