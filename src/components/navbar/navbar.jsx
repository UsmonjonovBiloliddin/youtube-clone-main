import { Stack , Box} from "@mui/material"
import { Link } from "react-router-dom"
import { img } from "../../constants"
import { colors } from "../../constants/colors"
import {SearchBar} from "../"

const Navbar = () => {
  return (
    <Stack direction={'row'} sx={{background: colors.primary}} alignItems={'center'} justifyContent={'space-between'} p={2}>
      <Link to={'/'}>
        <img src={img} alt="Logo" width={'150px'} />
      </Link>
       <SearchBar />
        <Box />
    </Stack>
  )
}

export default Navbar