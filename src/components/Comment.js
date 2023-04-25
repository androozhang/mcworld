import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <p>{comment.description}</p>
        </div>
    );
};

export default Comment;
