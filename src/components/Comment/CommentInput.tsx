import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import { setComment } from '../../store/commentFormSubSlice';
import createComment from '../../thunks/create-comment-thunk';

const CommentInput = () => {
  const { id : slug} = useParams();
  const { image, username } = useSelector((state) => state.profile)
  const { comment } = useSelector((state) => state.forms.comment);
  const dispatch = useDispatch();

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setComment(e.target.value));
  };

  const handlerForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createComment(slug));
  };

  return (
    <form className='card comment-form' onSubmit={handlerForm}>
      <div className='card-block'>
        <textarea
          className='form-control'
          placeholder='Write a comment...'
          value={comment ? comment : ''}
          onChange={onChangeComment}
          rows={3} />
      </div>
      <div className='card-footer'>
        <img
          src={image!}
          className='comment-author-img'
          alt={username!} />
        <button
          className='btn btn-sm btn-primary'
          type='submit'>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;