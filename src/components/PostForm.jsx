import React, { useState } from "react"
import { MyInput } from "./UI/input/MyInput"
import { MyButton } from "./UI/button/MyButton"
import { fix } from "../fix.js"

export const PostForm = ({create}) => {

    const sun = (x) => {
        const newObj = {}
        for(let i of x){
            newObj[i.index] = ''
        }
        return newObj
    }

    const [post, setPost] = useState(sun(fix.listOfFields))

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost(sun(fix.listOfFields))
      }


    const inputField = (fields) => {
        const ar = []
        for(let i of fields){
            ar.push(
                <MyInput 
                type='text' 
                placeholder={i.name} 
                value={post[i.index]}
                onChange={e => setPost({...post, [i.index]: e.target.value})}
                />
            )
        }
        return ar
    }

    return (
            <div>
                 <form>
                    {inputField(fix.listOfFields)} 
                    <MyButton onClick={addNewPost}>Create post</MyButton>
                </form>
            </div>
    )
}