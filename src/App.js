import React, { useMemo, useState, useEffect } from "react"
import '../src/styles/App.css'
import { PostList } from "./components/PostList"
import { PostForm } from "./components/PostForm"
import { PostFilter } from "./components/PostFilter"
import axios from "axios"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  useEffect(() => {
    getOrders()
  }, [])
  const createOrder = async (newPost) => {
    const response = await axios.post('http://localhost:5555/orders', newPost)
    console.log('create')
    console.log(response.data)
  }
  const getOrders = async () => {
    const response = await axios.get('http://localhost:5555/orders')
    await response.data.forEach(item => item.open = 'close')
    setPosts(response.data)
  }
  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5555/orders/${id}`)
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
    await createOrder(newPost)
    setPosts([...posts, newPost])
  }
  const deletePost = async (post) => {
    await deleteOrder(post._id)
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

    return (
      <div className="App">
        <hr style={{margin: '25px 0'}}/>
        <h3 style={{textAlign: 'left'}}>Новый заказ</h3>
        <PostForm create={createPost}/>
        <h3 style={{textAlign: 'left'}}>Поиск</h3>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={deletePost} editOpen={setOpen} posts={sortedAndSearchedPosts.reverse()} title={`Заказы (${sortedAndSearchedPosts.length}/${posts.length})`}/>
      </div>
    )
}

export default App
