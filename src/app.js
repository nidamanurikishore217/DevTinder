const express =require("express")

const app = express()
//  PORT =3000

    app.use((req,res)=>{
        res.send("Wellcome to the NewServer ")
    })
    app.listen(3000,()=>{
        console.log("Server runnig in the localHost:3000")
    })
    