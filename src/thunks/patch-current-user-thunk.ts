import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { patchCurrentUser } from '../services/api';
import { settingsPatchFailed, settingsPatchRequested, settingsPatchSucceeded } from '../store/apiSlice';
import { resetFormProfile } from '../store/profileFormSubSlice';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import makeErrorMessage from '../services/helpers/make-error-message';
import { setUser } from '../store';
import { TAPIError } from '../services/api.types';

const patchCurrentUserThunk: AppThunk = () => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  dispatch(settingsPatchRequested());
  const profile = getState().forms.profile ?? {};
  // Type Guards
  const userData: {
    username?: string;
    email?: string;
    bio?: string;
    image?: string;
    password?: string;
  } = {
    username: profile.username || '',
    email: profile.email || '',
    bio: profile.bio || '',
    image: profile.image || ''
  }

  if (profile.password) {
    userData.password = profile.password
  }

  try {
    const {
      data: {
        user: {
          username, email, bio, image,
        },
      },
    } = await patchCurrentUser({
      ...userData
    });
    batch(() => {
      dispatch(setUser({
        username, email, bio, image,
      }));
      dispatch(resetFormProfile());
      dispatch(settingsPatchSucceeded());
    });
  } catch (error) {
    dispatch(settingsPatchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export default patchCurrentUserThunk;
