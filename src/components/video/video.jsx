import { Box, Stack } from '@mui/material'
import  {VideoCard, ChannelCard, Loader} from '..'

const Video = ({videos}) => {
  if(!videos ) return <Loader />
  return (
   <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} gap={2} justifyContent={'center'}>
          {
              videos && videos.map(item => (
                <Box key={item.id.videoId}>
                      {item.id.videoId  && <VideoCard video={item}/> }
                      {item.id.channelId  && <ChannelCard video={item}/> }
                </Box>
              ))
          }
   </Stack>
  )
}

export default Video