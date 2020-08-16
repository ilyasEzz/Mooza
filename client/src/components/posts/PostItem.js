import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  useEffect(() => {
    addLike();
  }, [addLike])
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img
            className='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button type='button' onClick={e => addLike(_id)} className='btn btn-light'>
          <i className='fas fa-thumbs-up px-1'></i>
          {likes.length > 0 && (
            <span className='comment-count m-1'> {likes.length}</span>
          )}
        </button>
        <button
          type='button'
          onClick={e => removeLike(_id)}
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${_id}`} className='btn btn-primary'>
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count px-1'> {comments.length}</span>
          )}
        </Link>
        {!auth.loading && auth.user._id === user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);