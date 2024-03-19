import React, { useState } from "react"
import { MyInput } from "./UI/input/MyInput"
import { MyButton } from "./UI/button/MyButton"
import { fix } from "../fix.js"
// import { MySelect } from "./UI/select/MySelect.jsx"

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
        console.log(newPost)
        create(newPost)
        setPost(sun(fix.listOfFields))
    }

    const inputField = (fields) => {
        const ar = []
        let test = 0
        let keyIndex = 0
        const arw =  fields.filter(item => item.index !== 'id')
        for(let i of arw){
            if(keyIndex > 0) console.log(post[arw[keyIndex - 1].index] !== '')
            if(i.index === 'title' || post[arw[keyIndex - 1].index] !== ''){
                let opt = fix.lists[i.index]
                keyIndex++
                ar.push(
                    <MyInput 
                    type='text' 
                    placeholder={i.name} 
                    value={post[i.index]}
                    onChange={e => setPost({...post, [i.index]: e.target.value})}
                    key={keyIndex}
                    options={opt}
                    />
                ) 
            }
            if(post[i.index] === '') test++
        }
        if(test === 0){
            keyIndex++
            ar.push(<MyButton onClick={addNewPost} key={keyIndex}>Create post</MyButton>)
        }
        
        return ar
    }

    return (
            <div>
                 <form>
                    {inputField(fix.listOfFields)}
                </form>
            </div>
    )
}