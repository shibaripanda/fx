import React from "react"
import { MyInput } from "./UI/input/MyInput"
import { MySelect } from "./UI/select/MySelect"
import { fix } from "../fix.js"

export const PostFilter = ({filter, setFilter}) => {

    return (

<div>
      <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query : e.target.value})}
          placeholder="search..."
          options={fix.searchList}
        />
        <hr style={{margin: '15px 0'}}/>
      <MySelect
        value = {filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={fix.listOfFields}
      />
      </div>
    )
}
