import express from 'express';
import { adminLogin, employeeLogin, logout } from "../controller/auth.controller.js";


const router = express.Router();

//Admin Login Module
router.post("/admin/login", adminLogin );

//Employee Login Module
router.post("/employee/login", employeeLogin );

//Logout Module
router.post("/logout", logout);

export default router;