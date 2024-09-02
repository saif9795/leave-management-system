import pool from "../db/dbConnection.js";


//Login Controller for Admin
export const adminLogin = async (req, res) => {
    try {
        const { uname, upass } = req.body; //Takes input from body
        const user = await pool.query("SELECT * FROM admin WHERE username = ?", [uname]); //Matches credentials from DB
        const [{ fullname, username, pass }] = user[0];

        if (uname !== username || upass !== pass) {
            res.status(400).json({
                success: false,
                message: "wrong password"
            })
        }
        else {
            res.status(200).send("login success")
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "wrong credentials"
        })
    }

}

//Login Controller for Employee
export const employeeLogin = async (req, res) => {
    try {
        const { uname, upass } = req.body;
        const user = await pool.query('select * from employee where username = ?', [uname]);
        const [{ fullname, username, pass }] = user[0];

        if (uname !== username || upass !== pass) {
            res.status(400).json({
                success: false,
                message: "wrong password"
            })
        }
        else {
            res.status(200).send("login success")
        }

    } catch (error) {
        console.log("wrong credentials");
        res.status(400).json({
            success: false,
            message: "wrong credentials"
        })
    }

}

//Logout Controller 
export const logout = async (req, res) => {
    try {
        res.status(200).json({
            sucess: true,
            message: "logout successful"
        })
    } catch (error) {
        console.log("logout failed");
        res.status(400).json({
            success: false,
            message: "server error"
        })
    }
}
