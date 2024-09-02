import express from 'express';
import { adminGetRequest, adminPostDecision } from '../controller/admin.controller.js';

const router = express.Router();

//Get Leave Request for Admin
router.get("/request", adminGetRequest);

router.post("/decision", adminPostDecision);



export default router;