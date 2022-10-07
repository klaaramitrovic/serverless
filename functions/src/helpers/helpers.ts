import { CreateRequest, Comment } from "../models/models";

export const createCommentRequest = (comment: CreateRequest): Comment => {
 //logika koja poziva funkciju koja menja body comment-a
  return { ...comment, date: Date.now().toString()};
};