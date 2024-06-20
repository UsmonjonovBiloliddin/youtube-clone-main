import { Stack, Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category , Video} from "../";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos , setVideo] = useState()

  useEffect(() => {
    try {
      const getAPi = async () => {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        setVideo(data.items)
      };
      getAPi();
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);
  
  return (
    <Stack>
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Box>
        <Container maxWidth={"90%"}>
          <Typography  variant="h4" m={2} fontWeight={"bold"}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          <Video videos={videos}/> 
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
