const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const db = require("./db")
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.post("/todo",async(req,res)=>{

    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have send the wrong inputs"
        })

    }

    await db.create({
        
        title:parsedPayload.title,
        description:parsedPayload.description,
        completed:false
    });

    res.json({
        msg:"Toddo created"
    })

})

app.get("/getTodo",async(req,res)=>{

    const response = await db.find({
    });

    res.json({
        Todos:response
    })


    
})

app.put("/completed",(req,res)=>{
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status.json({
            msg:"you have wrong inputs"
        })
    }

    db.update({
        _id:parsedPayload.id
    },{
        completed:true
    })

    res.json({
        msg:"Updated Successfully"
    })
})

app.listen(3000)