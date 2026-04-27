import express from "express"
import authController from "../controller/auth.controller.js"

let router = express.Router()

// @route   POST /auth/api/signup
// @desc    Register a new user
// @access  Public
router.post("/api/signup",authController.Signup)

// @route   POST /auth/api/login
// @desc    Register a new user
// @access  Public
router.post("/api/login",authController.Login)

export default router