import React from "react"
import classes from './MySelect.module.css'

export const MySelect = ({options, defaultValue, value, onChange}) => {

    return (
            <select
                className={classes.myInp} 
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                <option value={option.index} key={options.indexOf(option)}>
                    {option.name}
                </option>
                    )}

            </select>
    )
}