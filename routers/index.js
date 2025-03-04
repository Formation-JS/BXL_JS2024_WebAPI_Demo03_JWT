import { Router } from "express";
import demoRouter from "./demo.router.js";
import authRouter from "./auth.router.js";


const mainRouter = Router();

mainRouter.use('/demo', demoRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;