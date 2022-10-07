import createRestuflFunction, { MethodEnum } from "../../utils/helpers";
import db from "../config/firestone.config";

const updateComment = createRestuflFunction({
  method: MethodEnum.PATCH,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];
      const body = req.body["body"];

      const query = db.collection("comment").doc(docId);
      await query.set({ body }, { merge: true });
      const snap = await query.get();

      res.status(200).json({
        message: "Comment updated",
        data: {
          id: docId,
          comment: snap.data(),
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

export default updateComment;