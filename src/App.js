import React, { useMemo, useState, useEffect } from "react"
import '../src/styles/App.css'
import { PostList } from "./components/PostList"
import { PostForm } from "./components/PostForm"
import { PostFilter } from "./components/PostFilter"
import axios from "axios"
import MainPage from "./components/MainPage"

function App() {

  // console.log(DOMRect)
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [leng, setLeng] = useState({})
  // const [value, setValue] = useState(1)
  useEffect(() => {
    getOrders()
    getLengs()
  }, [])

  const getLengs = async () => {
    const response = await axios.get('http://localhost:5555/leng')
    console.log(response.data)
    setLeng(response.data)
  }


  const getOrders = async () => {
    const response = await axios.get('http://localhost:5555/orders')
    await response.data.forEach(item => item.open = 'close')
    setPosts(response.data)
  }

  

  


  const sortedPosts = useMemo(() => {
      if(filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts
    }, [filter.sort, posts]
  )
  const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => Object.values(post).join().toLowerCase().includes(filter.query.toLowerCase()))
      }, [filter.query, sortedPosts]
  )
  const createPost = async (newPost) => {
    await axios.post('http://localhost:5555/orders', newPost)
    setPosts([...posts, newPost])
  }
  const deletePost = async (post) => {
    await axios.delete(`http://localhost:5555/orders/${post._id}`)
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const setOpen = (id) => {
    for(let i of posts){
        if(i._id === id) {
          if(i.open === 'close') i.open = 'open'
          else {
            i.open = 'close'
            break
          }
        }
        else{
          i.open = 'close'
        }
    }
    setPosts([...posts])
  }

  const workModePage = () => {
  return {
      name: 'Сервис',
    inbox: <div>   
            <h4 style={{textAlign: 'left'}}>Новый заказ</h4>
            <PostForm create={createPost}/>
            <h4 style={{textAlign: 'left'}}>Поиск</h4>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr style={{margin: '15px 0'}}/>
            <PostList remove={deletePost} editOpen={setOpen} posts={sortedAndSearchedPosts.reverse()} title={`Заказы (${sortedAndSearchedPosts.length}/${posts.length})`}/>
          </div>
    }
  } 


    return (
      <div className="App">
        {MainPage([workModePage(), workModePage(), workModePage()])}
      </div>
    )
}

export default App
