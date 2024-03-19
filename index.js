const express=require('express');

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("this is home page");
})

app.post("/bfhl",(req ,res)=>{
  const {data}=req.body;

  const even=data.filter(item=>item%2==0);
  const odd=data.filter(item=>item%2==1);
  const alpha=data.filter(item=>typeof item==="string")
                   .map(ele=>ele.toUpperCase());

  const result={
    Name:"Aryan",
    roll:2110990288,
    college:"Chitkara University",
    even,
    odd,
    alpha
  }

  res.status(201).json({success:true,data:result});
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server runnning at ${PORT}`)
})