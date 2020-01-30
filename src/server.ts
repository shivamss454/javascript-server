class Server
{
    private app:express.Express;
    constructor(private config:Iconfig)
    {
        this.app=express();
    }
    bootstrap(){

        console.log("inside bootstrap");
        this.setuproutes();
        return this;
    }
    run=()=>{
        const {app , config:{ port }}=this;
        app.listen(port,(err)=>{
            if(err)
            {
                throw err;
            }
        });
    }
  setuproutes()
  {
   this.app.get('/healthcheck',(req:Express.Request,res:Express.Response)=>{
       res.send('I am ok');
   });
  }
    
}