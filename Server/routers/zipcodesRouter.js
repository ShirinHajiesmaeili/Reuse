import { Router } from "express";
import { getZipCodes } from "../controllers/zipcodeController.js";

const zipcodesRouter = Router();

zipcodesRouter.get("/", getZipCodes);

export default zipcodesRouter;
