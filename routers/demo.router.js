import { Router } from "express";
import demoController from "../controllers/demo.controller.js";


const demoRouter = Router();

demoRouter.route('/public')
    .get(demoController.public)
    .all((_, res) => res.sendStatus(405));

demoRouter.route('/private')
    .get(demoController.private)
    .all((_, res) => res.sendStatus(405));
    
demoRouter.route('/admin')
    .get(demoController.admin)
    .all((_, res) => res.sendStatus(405));


export default demoRouter;