import { Router } from "express";
import AuthController from "./src/app/controllers/AuthController";
import UserController from "./src/app/controllers/UserController";
import authMiddleware from "./src/app/middlewares/authMiddleware";

const routes = Router();

routes.post("/users", UserController.store)
routes.post("/auth", AuthController.authenticate)
routes.get("/users", authMiddleware, UserController.index)

export default routes