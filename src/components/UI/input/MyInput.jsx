import React from "react"
import classes from './MyInput.module.css'
// import { fix } from "../../../fix.js"

export const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
        <input type="text" list={props.options} ref={ref} {...props} className={classes.myInp}/>
        <datalist id={props.options}>
        {props.options.map(option =>
                <option key={props.options.indexOf(option)}>
                    {option}
                </option>
                    )}
        </datalist>
        </div>
    )
})