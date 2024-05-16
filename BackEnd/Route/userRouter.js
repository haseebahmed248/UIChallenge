import {home, login, logout, signup, users} from '../Controller/UserController.js';
import express from "express";
import { userAuth } from '../Middlewares/auth.js';
const router = express.Router();

router.post('/signup',signup)
router.post("/login",login)
router.get("/",users);
router.get("/home",userAuth,home)
router.get('/logout',logout);

export default router;