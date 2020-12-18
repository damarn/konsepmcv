import Home from "../View/container/home"
let Data =[
    {
        Title: "Honda",
        Status: "Offline",
        Value:[3817239030210919,38179328921]
    },  
    {
        Title: "Yamaha",
        Status: "Stop"
    },
      
    {
        Title: "Yamaha",
        Status: "Stop"
    },
      
    {
        Title: "Yamaha",
        Status: "Stop"
    },
      
    {
        Title: "Yamaha",
        Status: "Stop"
    },

]
const Controller = () => {
    return(
        <Home Data = {Data}/>
    )
}
export default Controller