import React from 'react';

const PostById = async ({params}) => {
    const {blog_id} = await params;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/${blog_id}");
    const post = res.json();
    console.log(post)

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default PostById;