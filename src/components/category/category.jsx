import { Stack, selectClasses } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";
const Category = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => {
        return (
          <button
            onClick={() => setSelectedCategory(item.name)}
            key={item.name}
            className="category-btn"
            style={{ background : item.name === selectedCategory ? colors.secondary : "#fff"}}

          >
            <span
              style={{
                marginRight: "10px",
                color:
                  item.name === selectedCategory ? "#ffff" : colors.secondary,
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                color:
                  item.name === selectedCategory ? "#ffff" : colors.secondary,
              }}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
