import React, { useState } from "react"
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"
import { fix } from "../fix.js"

export const PostItem = (props) => {
    const sun = (x) => {
        const newObj = {}
        for(let i of x){
            newObj[i.index] = ''
        }
        return newObj
    }
    const [post, setPost] = useState(sun(fix.listOfFields))

    return (
            <div className="post">
                <div className="post__content">
                <strong>Заказ № {props.post.order} | {new Date(props.post.date).toLocaleString()} | {props.post.clientTel}</strong>
                <hr style={{margin: '7px 0'}}/>
                    <div>
                        <div><strong>{props.post.title} {props.post.model}</strong> ({props.post.sn})</div>
                        <div>{props.post.problem}</div>
                        <div>Согласовано: {props.post.cost} бел.руб.</div>
                        <hr style={{margin: '7px 0'}}/>
                        <div>{props.post.name}, {props.post.addres}</div>
                        <hr style={{margin: '7px 0'}}/>
                        <div><MyInput 
                    type='text' 
                    placeholder={'Добавить информацию'} 
                    value={post.history}
                    onChange={e => setPost({...post, history: e.target.value})}
                    key={777}
                    options={[]}
                    />
                    <MyButton onClick={() => props.remove(props.post)}>Готов</MyButton></div>
                    </div>
                </div>
                <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Готов</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => props.remove(props.post)}>Выдать</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
                
            </div>
    )
}