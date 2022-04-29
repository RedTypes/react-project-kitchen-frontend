import { AppThunk } from "../store/store.types"
import { commentDeleteRequested, commentDeleteSucceeded, commentDeleteFailed } from '../store'
import { deleteComment } from "../services/api"

export const deleteCommentThunk:AppThunk = (slug:string, commentId:string) => {
    return function (dispatch, getState) {
        dispatch(commentDeleteRequested());
        deleteComment(slug, commentId).then(res => {
            if (res.status === 200) {
                const { view } = getState()
                const newCommentsFeed = view.commentsFeed
            }
        })
    }
}