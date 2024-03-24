import React from "react"
import { PostItem } from "./PostItem"
// import { MyButton } from "./UI/button/MyButton"

export const FilteButList = ({posts, title, remove, editOpen}) => {


    if(!posts.length){
        return <h1 style={{textAlign: 'center'}}>Пусто</h1>
    }

    // <div className="post__btns">
    //             <MyButton onClick={() => props.editOpen(props.post._id)}>Свернуть</MyButton>
    //             <hr style={{margin: '5px 0'}}/>
    //             </div>

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