import { Paper } from '@mui/material'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {colors} from "../../constants/colors"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 
const SearchBar = () => {
  const navigate = useNavigate()
  const [value , setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`search/${value}`)
    setValue('')
  }
  return (
    <Paper onSubmit={handleSubmit}  component={'form'} sx={{border: `1px solid ${colors.secondary}`}}>
      <input  value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Search...' className='search-bar' style={{paddingLeft:'15px' }}/>
      <IconButton type='submit'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar