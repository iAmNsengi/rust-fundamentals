import express from "express";
import {
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
} from "../controllers/authController.js";
import { validateLogin } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/login", validateLogin, login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);

// Restrict to admin
router.use(restrictTo("admin"));

export default router;
