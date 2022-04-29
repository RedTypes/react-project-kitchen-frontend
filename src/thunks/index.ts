import loadInitialDataThunk from './load-initial-data-thunk';
import { deleteLikeThunk, addLikeThunk } from './delete-add-likes-thunks';
import getUserProfileThunk from './get-user-profile-thunk';
import { followProfileThunk, unfollowProfileThunk } from './post-follow-unfollow--profile-thunk';
// eslint-disable-next-line import/prefer-default-export
export {
  loadInitialDataThunk,
  deleteLikeThunk,
  addLikeThunk,
  getUserProfileThunk,
  unfollowProfileThunk,
  followProfileThunk,
};
