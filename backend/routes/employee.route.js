import express from 'express';
import { employeeGetDecision, employeePostRequest } from '../controller/employee.controller.js';


const router = express.Router();

//Leave Request Module for Employee
router.post("/request", employeePostRequest );

//Get Decision From Admin 
router.get("/decision", employeeGetDecision);



export default router;