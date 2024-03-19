import React, { useState } from "react"
import { MyInput } from "./UI/input/MyInput"
import { MyButton } from "./UI/button/MyButton"
import { fix } from "../fix.js"
import { rendomNumberOrder } from "../module/rendomNumberOrder.js"
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
            ...post, id: Date.now(), order: rendomNumberOrder(fix.orderNumbers) + '_' + post.manager.split(' ')[0][0] + post.manager.split(' ')[1][0], date: Date.now()
        }
        create(newPost)
        for(let key in newPost){
            if(['title', 'problem', 'model'].includes(key)){
                if(!fix.lists[key].includes(post[key])) fix.lists[key].push(post[key])
            }
        }
        setPost(sun(fix.listOfFields))
    }

    const inputField = (fields) => {
        const ar = []
        let test = 0
        let keyIndex = 0
        const arw =  fields.filter(item => !['id', 'order', 'date', 'history'].includes(item.index))
        for(let i of arw){
            if(i.index === 'manager' || post[arw[keyIndex - 1].index] !== ''){
                const opt = fix.lists[i.index] ? fix.lists[i.index] : []
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
            ar.push(<MyButton onClick={addNewPost} key={keyIndex}>Создать заказ</MyButton>)
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