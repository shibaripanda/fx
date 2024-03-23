import React, { useMemo, useState, useEffect } from "react"
import '../src/styles/App.css'
import { PostList } from "./components/PostList"
import { PostForm } from "./components/PostForm"
import { PostFilter } from "./components/PostFilter"
import axios from "axios"
import Tab from '@mui/material/Tab';
import { Box } from "@mui/material"
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  // const [value, setValue] = useState(1)
  useEffect(() => {
    getOrders()
  }, [])
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
  function CenteredTabs(arTab) {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    console.log(value)

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {arTab.map((item, index) => <Tab label={item.label} value={index + 1}/>)}
          </TabList>
        </Box>
        {[arTab[0]].map((item) => <TabPanel value={45}>{item.indox}</TabPanel>)}
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
    )
  }
    return (
      
      <div className="App">

       {CenteredTabs([
        {label: 'Item One', value: 1, indox: 'wwwwwwwwwww'}, {label: 'Item Two', value: 2, indox: 'eeeeeeeeeee'}, {label: 'Item Three', value: 3, indox: 'ffffffff'}
       ])}

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
