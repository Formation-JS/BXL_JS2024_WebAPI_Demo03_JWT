import { Router } from "express";
import demoController from "../controllers/demo.controller.js";
import { authorizeMiddleware } from "../middlewares/auth.middleware.js";


const demoRouter = Router();

demoRouter.route('/public')
    .get(demoController.public)
    .all((_, res) => res.sendStatus(405));

demoRouter.route('/private')
    .get(authorizeMiddleware(), demoController.private)
    .all((_, res) => res.sendStatus(405));
    
demoRouter.route('/admin')
    .get(authorizeMiddleware(true), demoController.admin)
    .all((_, res) => res.sendStatus(405));


export default demoRouter;