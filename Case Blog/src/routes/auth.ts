
import express from "express";
import { handleRegister, handleLogin } from "../controllers/auth";
import { authenticate } from "../middlewares/auth";
import { upload } from "../utils/multer";
import { limiter } from "../middlewares/rate-limit";

const router = express.Router();

router.post("/register/upload-profile-picture",upload.single("profile"), handleRegister);
router.post("/login", handleLogin);

router.get("/me",limiter, (req, res) => {
  res.json({ message: "Test Limiter" ,});
});

export default router;
