import React, { useState } from "react"
import '../styles/App.css'
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"
import { fix } from "../fix.js"
import axios from "axios"


export const PostItem = (props) => {
    const [history, setHistory] = useState({newHis: '', time: ''})
    
    const editOldPost = async (e) => {
        e.preventDefault()
        props.post.history = props.post.history + '\n' + history.time + '\n' + history.newHis
        await axios.put(`http://localhost:5555/orders/${props.post._id}`, {history: props.post.history}) 
        setHistory({newHis: '', time: ''})
    }
    const editItem = async (status) => {
        props.post.history = props.post.history + '\n' + new Date(Date.now()).toLocaleString() + `\n${status}`
        await axios.put(`http://localhost:5555/orders/${props.post._id}`, {history: props.post.history})
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
    const orderOpen = () => {
        if(props.post.open === 'open'){
            return      <div className="post">
                <div className="post__content">
                <strong>№ {props.post.order} | {props.post.title} {props.post.model} | {new Date(props.post.date).toLocaleString()}</strong>
                <hr style={{margin: '7px 0'}}/>
                    <div>
                        <div> ({props.post.sn})</div>
                        <div>{props.post.problem}</div>
                        <div>Согласовано: {props.post.cost} бел.руб.</div>
                        <hr style={{margin: '7px 0'}}/>
                        <div><strong>{props.post.clientTel}</strong>, {props.post.name}, {props.post.addres}</div>
                        <hr style={{margin: '7px 0'}}/>
                        <div className="code">{props.post.history}</div>
                        <div>
                            {itemsAr()}
                        </div>
                    </div>
                </div>
                <div className="post__btns">
                <MyButton onClick={() => props.editOpen(props.post._id)}>Свернуть</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Готов')}>Готов</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => editItem('Выдан')}>Выдать</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                <hr style={{margin: '5px 0'}}/>
                <MyButton onClick={() => props.printOrder(props.post)}>Печать</MyButton>
                <hr style={{margin: '5px 0'}}/>
                

                </div>
            </div>
        }
        else{
            return   <div className="smallpost">
                    <div className="post__content">
                    <strong>№ {props.post.order} | {props.post.title} {props.post.model} | {new Date(props.post.date).toLocaleString()}</strong>
                    </div>
                    <div className="post__btns">
                    <MyButton onClick={() => props.editOpen(props.post._id)}>Открыть</MyButton>
                    </div>
                </div>
        }
    }

    return (
        <div>
            {orderOpen()}
        </div>
    )
}