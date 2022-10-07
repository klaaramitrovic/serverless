import { CreateRequest, Comment } from "../models/models";

export const createCommentRequest = (comment: CreateRequest): Comment => {
  return { ...comment, date: Date.now().toString()};
};