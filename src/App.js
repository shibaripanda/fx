import React, { useMemo, useState } from "react"
import '../src/styles/App.css'
// import 'dotenv/config'
import { PostList } from "./components/PostList"
import { PostForm } from "./components/PostForm"
import { PostFilter } from "./components/PostFilter"
import { db } from "./module/db"

async function App() {
//   const path = require('path');
// const webpack = require('webpack')

// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

// module.exports = {
//   mode: 'development',
//   entry: './src/index.ts',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     new NodePolyfillPlugin(),
//     new webpack.DefinePlugin({
//       'process.env': {
//         HELLO: JSON.stringify(process.env.HELLO)
//       }
//     }),
//   ]
// };

  const status = await db()
  console.log(status)

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})

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

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
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
