import onCommentCreated from "./reactive/onCommentCreated";
import onCommentUpdated from "./reactive/onCommentUpdate";
import createComment from "./restful/createComment";
import deleteComment from "./restful/deleteComment";
import getAllComments from "./restful/getComments";
import updateComment from "./restful/updateComment";

exports.getAllComments = getAllComments
exports.createComment = createComment
exports.updateComment = updateComment
exports.deleteComment = deleteComment
exports.onCommentCreated = onCommentCreated
exports.onCommentUpdated = onCommentUpdated
