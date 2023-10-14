import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import EmployeeApi from "../../apis/employees/EmployeeApi";
import { PagingEmployeeResModel } from "../../models/response/PagingEmployeeResModel";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchAppBarProps {
  setListEmployee: (data: any) => void;
  setLoadingStatus: (data: boolean) => void;
}

export default function SearchAppBar({
  setListEmployee,
  setLoadingStatus,
}: SearchAppBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNum, setPageNum] = useState<number>(1);

  const handleChangeSearchInp = (e: any) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  const handleSearchPaging = async (pageNum?: number) => {
    await EmployeeApi.searchEmployeePaging(searchQuery!, pageNum)
      .then((res: PagingEmployeeResModel) => {
        setListEmployee((prev: any) => [...prev, ...res.data.employees]);
        setLoadingStatus(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    handleSearchPaging(pageNum);
  }, [pageNum]);

  /**
   *  This function for set new page number for calling api by the scrooling gesture
   * Get scrollHeight, innerHeight, scrollTop for setting condition load more
   * In this case, I plus 1 for innerHeight + scrollTop beacause of fetching data when app is seen the sum of innerHeight and scrollTop + 1 is nearly with the scrollHeight (the previous fetching data before scroll point sit on the pos which have the height is same as the scrollHeight)
   * Note: if you want to load data more smoothly, you can increase the plussing variable for another case(network speed, smooth)
   */
  const handleInfiniteScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    const increaseHeight = 1;

    console.log("scrollHeight" + scrollHeight);
    console.log("innerHeight" + innerHeight);
    console.log("scrollTop" + scrollTop);
    try {
      if (innerHeight + scrollTop + increaseHeight >= scrollHeight) {
        setLoadingStatus(true);
        setPageNum((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Add event listeners for scrolling to execute load more data
   * After executing done, we remoe this action because of avoiding executing unlimited
   */
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChangeSearchInp}
              value={searchQuery}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
