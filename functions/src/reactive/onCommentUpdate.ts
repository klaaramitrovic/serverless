import * as functions from "firebase-functions";
import { Comment } from "../models/models";

const rudeWords: string[] = ["rude1", "rude2", "rude3", "rude4"];

const onCommentUpdated = functions.firestore.document("comment/{commentId}")
  .onUpdate((change, context) => {
    const after = change.after.data() as Comment;
    var commentBody = after.body;

    var dots = "";
    rudeWords.forEach(word => {
      if(commentBody.includes(word))
      {
        for(let i = 0; i< word.length; i++)
        {
          dots = dots + "*";
        }
        
        commentBody = commentBody.replace(new RegExp(word, 'g'), dots)
        console.log("Body changed", commentBody);
      }
    })
    return change.before.ref.update({body: commentBody})
});

export default onCommentUpdated;