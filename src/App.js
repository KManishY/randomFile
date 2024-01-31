import logo from "./logo.svg";
import "./App.css";
import { Box, Stack } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Middlebar from "./components/Middlebar";
import Rightbar from "./components/Rightbar";

function App() {
  
  return (
    <div>
      <Stack direction="row" border={1} spacing={4}>
        <Box sx={{ width: 1, border: 1 }}>
          <Leftbar />
        </Box>
        <Box sx={{ width: 1 }}>
          <Middlebar />
        </Box>
        {/* <Box sx={{ width: 1 }}>
          <Rightbar />
        </Box> */}
      </Stack>{" "}
    </div>
  );
}

export default App;
