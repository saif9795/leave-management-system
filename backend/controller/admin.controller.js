import pool from "../db/dbConnection.js";

//Get Request Module for Admin
export const adminGetRequest = async (req, res) => {

    try {
        //Gets all the request 
        const request = await pool.query("SELECT * FROM request");
        const data = request[0];
        if (data.length > 0) {
            res.status(200).send(data);
        }
        else {
            res.status(404).send("No Request Pending");
        }

    } catch (error) {
        console.log("request fetch failed");
        res.status(400).json({
            success: false,
            message: "server error"
        })
    }

}

//Post Decision Module for Admin
export const adminPostDecision = async (req, res) => {
    try {
        const { decision, user } = req.body;

        const update = await pool.query("UPDATE request SET decision = ? WHERE request.username = ?", [decision, user]);
        res.status(200).json({
            success: true,
            message: `Request ${decision}`
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "server error"
        })
    }
}