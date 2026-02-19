import { Router } from "express";
import {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  login,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgotPassword,
  verifyEmail,
} from "../controllers/auth.Controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Unsecured Routes
router.route("/register").post(userRegisterValidator(), validate, registerUser);    // work with email, password, username
router.route("/login").post(userLoginValidator(), validate, login);     // work with email, password, username
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);    // no needed
router
  .route("/forgot-password")    // work with email 
  .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator(), validate, resetForgotPassword);

// Secure Routes
router.route("/logout").post(verifyJWT, logoutUser);    // no needed
router.route("/current-user").post(verifyJWT, getCurrentUser);  // no needed
router
  .route("/change-password")    // work with oldPassword and newPassword with exact this name
  .post(
    verifyJWT,
    userChangeCurrentPasswordValidator(),
    validate,
    changeCurrentPassword,
  );
router
  .route("/resend-email-verification")  // no needed
  .post(verifyJWT, resendEmailVerification);

export default router;
