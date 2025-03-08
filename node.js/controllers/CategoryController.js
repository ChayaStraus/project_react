import categoryTable from "../table/categoryTable.js";

export default{
    getAll:(req,res)=>{
        categoryTable.find()
        .then((list)=>{
            res.status(200).send(list)
        })
        .catch((err)=>{
            res.status(404).send(err.message)
        })
    },
    add:(req,res)=>{
        const c=new categoryTable(req.body)
        c.save()//שומר במסד
        .then((c)=>{
            res.status(200).send(c)
        })
        .catch((err)=>{
            res.status(404).send(err.message)
        })
    },
    update:(req,res)=>{
        categoryTable.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((c)=>{res.status(200).send(c)})
        .catch((err)=>{
            res.status(404).send(err.message)
        })
    },
    delete:(req,res)=>{
        categoryTable.findByIdAndDelete(req.params.id)
        .then(()=>{res.status(200).send(true)})
        .catch(()=>{res.status(404).send(false)})
    }


}