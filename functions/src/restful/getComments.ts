import createRestuflFunction, { MethodEnum } from "../../utils/helpers";
import db from "../config/firestone.config";

const getAllComments = createRestuflFunction({
  method: MethodEnum.GET,
  callback: async (req, res) => {
    try {
      const query = db.collection("comment");
      const querySnapshot = await query.get();
      const data: { id: string; comment: FirebaseFirestore.DocumentData }[] = [];
      querySnapshot.forEach((doc: any) =>
        data.push({
          id: doc.id,
          comment: doc.data(),
        })
      );

      res.status(200).json({
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default getAllComments;