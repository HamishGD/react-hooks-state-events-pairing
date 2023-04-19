import React from "react";

const Comment = ({comment, user}) => {
    return (
        <div className="comment">
            <div className="comment-user">
                <h2>{user}</h2>
            </div>
            <div className="comment-text">
                <span>{comment}</span>
            </div>
        </div>
    )
}

export default Comment;