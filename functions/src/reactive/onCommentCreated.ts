import * as functions from "firebase-functions";
import { Comment } from "../models/models";

const rudeWords: string[] = ["rude1", "rude2", "rude3", "rude4"];

const onCommentCreated = functions.firestore
  .document("comment/{commentId}")
  .onCreate((snapshot, context) => {
    var comment = snapshot.data() as Comment;
    
    var commentBody: string = comment.body;

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

    comment.body = commentBody;
    console.log("Trigger", comment);
    return snapshot.ref.update({body: commentBody})
});

export default onCommentCreated;