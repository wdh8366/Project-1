import { Request, Response } from "express";
import User from "../models/userModel";

// 모든 사용자 가져오기
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// 사용자 추가
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
