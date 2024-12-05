import express from "express";
import { getUsers, createUser } from "../controllers/userController";

const router = express.Router();

// 사용자 조회
router.get("/", getUsers);

// 사용자 생성
router.post("/", createUser);

export default router;
