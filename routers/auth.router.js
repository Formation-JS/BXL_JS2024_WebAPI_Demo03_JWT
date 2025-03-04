import { Router } from "express";
import authController from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.route('/login')
    .post(authController.login)
    .all((_, res) => res.sendStatus(405));

authRouter.route('/register')
    .post(authController.register)
    .all((_, res) => res.sendStatus(405));

export default authRouter;