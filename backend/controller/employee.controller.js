import pool from "../db/dbConnection.js";


//Leave Request Controller for Employee
export const employeePostRequest = async(req,res)=>{
    try {
        //Generates a Random leaveID
        function randy(min, max){
            const rand = Math.floor(Math.random()*(max-min+1)+min);
            return rand;
        }
    
        const getId = await pool.query("SELECT id FROM request");
        const randId = randy(1001,9999);
    
        for (let index = 0; index < getId[0].length; index++) {
            const element = getId[0][index];
            if(element!=randId){
                continue;
            }
            else{
                const randId = randy(1001,9999);
            }
            
        }
    
        const {username, from_date, to_date,comments} = req.body;
        const id = randId;
        const put_req = await pool.query("INSERT INTO request (id,username,from_date,to_date,comments) VALUES (?,?,?,?,?)",[id,username, from_date, to_date,comments]);
        res.status(200).json({
            success: true,
            message: "request made",
            status : "pending"
        });
    } catch (error) {
        console.log("request failed");
        res.status(400).json({
            success : false,
            message : "server error"
        })
    }
}

//Get Decision Controller for Employee
export const employeeGetDecision = async(req,res)=>{
    try {
     const uname = req.query.username;
     const showDecision = await pool.query("SELECT * FROM request WHERE username = ?",[uname]);
     const [{id, username, from_date, to_date, comments, decision}] = showDecision[0];
     
     if(decision=="Accepted" || decision =="Rejected"){
         const history = await pool.query("INSERT INTO history (id, username, from_date, to_date, comments, decision) VALUES (?, ?, ?, ?, ?, ?)", [id, username, from_date, to_date, comments, decision]);
         const deleteFromRequest = await pool.query("DELETE FROM request WHERE username = ?",[uname]);
     }
     
     res.status(200).json({
         success : true,
         id : id,
         username : username,
         status : decision
     })
    } catch (error) {
     console.log("decision fetch failure");
     res.status(400).json({
         success : false,
         message : "server error"
     })
    }
 }