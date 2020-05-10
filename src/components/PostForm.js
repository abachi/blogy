import React, { useState } from 'react';

export const PostForm = ({ onSavePost, post }) => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState(post ? post.title : '');
  const [body, setBody] = useState(post ? post.body : '');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || body.trim().length === 0) {
      setError('Title and Body are required');
    } else {
      onSavePost({
        title,
        body,
      });
      setError('');
      setTitle('');
      setBody('');
    }
  };

  return (
    <div>
      {error.length > 0 && (
        <div className="error">
          <p className="error__message">{error}</p>
        </div>
      )}
      <form className="post-form" onSubmit={onSubmit}>
        <div className="input-group">
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="input-group">
          <textarea
            className="textarea"
            placeholder="What are you thinking about?"
            value={body}
            onChange={onBodyChange}
          ></textarea>
        </div>
        <div className="input-group">
          <button className="button button--primary" type="submit">
            Save Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
