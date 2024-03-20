import React, { useState } from "react"
import '../styles/App.css'
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"
import { fix } from "../fix.js"

export const PostItem = (props) => {
    const [history, setHistory] = useState({newHis: '', time: ''})

    const editOldPost = (e) => {
        e.preventDefault()
        props.post.history = props.post.history + '\n' + history.time + '\n' + history.newHis 
        setHistory({newHis: '', time: ''})
    }
    const editItem = (status) => {
        props.post.history = props.post.history + '\n' + new Date(Date.now()).toLocaleString() + `\n${status}` 
        setHistory({newHis: '', time: ''})
    }
    function checkPress(e){
		if(e.key === 'Enter'){
            editOldPost(e)
		}
	}
    const itemsAr = () => {
        const ar = []
        ar.push(<MyInput 
            type='text' 
            placeholder={'Добавить информацию'} 
            value={history.newHis}
            onChange={e => setHistory({...history, newHis: e.target.value, time: new Date(Date.now()).toLocaleString()})}
            key={777}
            options={fix.searchList}
            onKeyPress={(e) => checkPress(e)}
        />)
        if(history.newHis !== ''){
            ar.push(<MyButton onClick={editOldPost} key={7777}>Добавить</MyButton>)
        }
        return ar
    }

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
                        <div className="code">{props.post.history}</div>
                        <div>
                            {itemsAr()}
                        </div>
                    </div>
                </div>
                <div className="post__btns">
                <MyButton onClick={() => editItem('Якубовский')}>Якубовскому</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Безмен')}>Безмену</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Ждет зч')}>Ждет зч</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Готов')}>Готов</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Выдан')}>Выдать</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
    )
}