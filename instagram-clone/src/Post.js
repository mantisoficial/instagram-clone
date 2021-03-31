import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="mantis"
                    src="/static/images/avatr/1.jpg"
                />
                <h3>Username</h3>
            </div>


            <img className="post__image" src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" alt="" />
            <h4 className="post__text"><strong>mantis: </strong>Boa amgao!</h4>
        </div>
    )
}

export default Post
