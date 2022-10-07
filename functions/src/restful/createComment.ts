
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";
import db from "../config/firestone.config";
import { createCommentRequest } from "../helpers/helpers";
import { CreateRequest } from "../models/models";

const createComment = createRestuflFunction({
  method: MethodEnum.POST,
  callback: async (req, res) => {
    try {
      const body: CreateRequest = req.body;

      const comment = createCommentRequest({
        title: body.title,
        body: body.body,
      });

      const ref = await db.collection("comment").add(comment);
      const doc = await ref.get();

      res.status(200).json({
        message: "Comment created",
        data: {
          id: doc.id,
          comment: doc.data(),
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default createComment;