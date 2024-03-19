import React from "react"
import { MyButton } from "./UI/button/MyButton"

export const PostItem = (props) => {

    return (
            <div className="post">
                <div className="post__content">
                <strong>Заказ № {props.post.order} | {new Date(props.post.date).toLocaleString()}</strong>
                <hr style={{margin: '7px 0'}}/>
                    <div>
                        <div><strong>{props.post.title} {props.post.model}</strong></div>
                        <div>({props.post.sn})</div>
                        <div>{props.post.problem}</div>
                        <hr style={{margin: '7px 0'}}/>
                        <div><strong>{props.post.clientTel}</strong> {props.post.name}, {props.post.addres}</div>
                        <div></div>
                    </div>
                </div>
                <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
    )
}