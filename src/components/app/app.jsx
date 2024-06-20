import { Stack } from '@mui/material'
import {Channel, Main, Navbar, Search , VideoDetail} from "../"
import { Route, Routes } from 'react-router-dom'

const App = () => {
    
    return (
        <Stack className='app' > 
            <Navbar />
            <Routes>
                <Route path='/'  element={<Main />} />
                <Route path='/channel'  element={<Channel />}/>
                <Route path='/video/:id'  element={<VideoDetail />}/>
                <Route path='/search/:id'  element={<Search />}/>
            </Routes>
        </Stack> 
        
    )
}

export default App