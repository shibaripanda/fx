import React from "react"
import { PostItem } from "./PostItem"

export const PostList = ({posts, title, remove, editOpen}) => {


    if(!posts.length){
        return <h1 style={{textAlign: 'center'}}>Пусто</h1>
    }

    return (
            <div>
                <h3 style={{textAlign: 'center'}}>
                    {title}
                </h3>
                {posts.map((post) => 
                    <PostItem remove={remove} editOpen={editOpen} posts={posts} post={post} key={post.id}/>
                )}
            </div>
    )
}