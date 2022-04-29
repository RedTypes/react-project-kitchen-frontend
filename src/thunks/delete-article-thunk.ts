import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import {
  articleDeleteRequested, articleDeleteSucceeded, articleDeleteFailed, setAllArticles,
} from '../store';
import { deleteArticle } from '../services/api';
import { TAPIError } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';

const deleteArticleThunk: AppThunk = (slug: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  dispatch(articleDeleteRequested());
  try {
    const { status } = await deleteArticle(slug);
    if (status === 200) {
      const articles = getState().all.articles ?? [];
      batch(() => {
        dispatch(setAllArticles(articles?.filter((item) => item.slug !== slug)));
        dispatch(articleDeleteSucceeded());
      });
    }
  } catch (error) {
    dispatch(articleDeleteFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export default deleteArticleThunk;
