import React, { useMemo, useState, useEffect } from "react"
import '../src/styles/App.css'
import { PostList } from "./components/PostList"
import { PostForm } from "./components/PostForm"
import { PostFilter } from "./components/PostFilter"
import axios from "axios"

function App() {
  
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const createOrder = async (newPost) => {
    const response = await axios.post('http://localhost:5555/orders', newPost)
    console.log('create')
    console.log(response.data)
  }
  const getOrders = async () => {
    const response = await axios.get('http://localhost:5555/orders')
    setPosts(response.data)
    console.log(response.data[0])
    console.log('get')
  }
  const deleteOrder = async (id) => {
    const response = await axios.delete(`http://localhost:5555/orders/${id}`)
    console.log(response)
    console.log('delete')
  }
  useEffect(() => {
    getOrders()
  }, [])
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

    return (
      <div className="App">
        <hr style={{margin: '15px 0'}}/>
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={deletePost} posts={sortedAndSearchedPosts.reverse()} title="Заказы"/>
      </div>
    )
}

export default App
