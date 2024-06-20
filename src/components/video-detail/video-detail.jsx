import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Loader } from '..'
import {
    CheckCircle,
    FavoriteOutlined,
    MarkChatRead,
    Tag,
    Visibility,
} from "@mui/icons-material";
import { Video } from "../";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideo, setRelatedVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            const getData = async () => {
                const data = await ApiService.fetching(
                    `videos?part=snippet,statistics&id=${id}`
                );
                setVideoDetail(data.items[0]);

                const relatedData = await ApiService.fetching(
                    `search?part=snippet&relatedToVideoId=${id}&type=video`
                );
                setRelatedVideo(relatedData.items);
            };
            getData();
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    if (!videoDetail) return <Loader />

    return (
        <Box minHeight={"90vh"}>
            <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                <Box width={"75%"}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls
                        className="react-player"
                    />
                    {videoDetail?.snippet?.tags?.map((item, idx) => (
                        <Chip
                            label={item}
                            key={idx}
                            sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
                            deleteIcon={<Tag />}
                            onDelete={() => { }}
                            variant="outlined"
                        />
                    ))}

                    <Typography variant="h5" fontWeight="bold" p={2}>
                        {videoDetail?.snippet?.title}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ opacity: ".7" }} p={2}>
                        {videoDetail?.snippet?.description}
                    </Typography>

                    <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
                        <Stack
                            direction="row"
                            gap="3px"
                            alignItems="center"
                            sx={{ opacity: "0.7" }}
                        >
                            <Visibility />
                            {parseInt(
                                videoDetail?.statistics?.viewCount
                            ).toLocaleString()}{" "}
                            views
                        </Stack>
                        <Stack
                            direction="row"
                            gap="3px"
                            alignItems="center"
                            sx={{ opacity: "0.7" }}
                        >
                            <FavoriteOutlined />
                            {parseInt(
                                videoDetail?.statistics?.likeCount
                            ).toLocaleString()}{" "}
                            likes
                        </Stack>
                        <Stack
                            direction="row"
                            gap="3px"
                            alignItems="center"
                            sx={{ opacity: "0.7" }}
                        >
                            <MarkChatRead />
                            {parseInt(
                                videoDetail?.statistics?.commentCount
                            ).toLocaleString()}{" "}
                            comment
                        </Stack>
                    </Stack>

                    <Stack py={1} px={2}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap="5px"
                            marginTop="5px"
                        >
                            <Avatar
                                src={videoDetail?.snippet?.thumbnails?.default?.url}
                                alt={videoDetail?.snippet?.channelTitle}
                            />
                            <Typography variant="subtitle2" color="gray">
                                {videoDetail?.snippet?.channelTitle}
                                <CheckCircle
                                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                                />
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    //   width={"25%"}
                    width={{ xs: "100%", md: "25%" }}
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    overflow={"scroll"}
                    maxHeight={"140vh"}
                >


                    <Video videos={relatedVideo} />
        </Box>
            </Box>
        </Box>
    );
};

export default VideoDetail;
