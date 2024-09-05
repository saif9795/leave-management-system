import express from 'express';
import { adminGetRequest, adminPostDecision } from '../controller/admin.controller.js';

const router = express.Router();

//Get Leave Request Module for Admin
router.get("/request", adminGetRequest);

//Post Decision Module for Admin
router.post("/decision", adminPostDecision);



export default router;