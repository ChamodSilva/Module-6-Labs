import { Box, Typography } from "@mui/material";

function Greeting({ name, children })
{
    function displayHandler()
    {
        return name ? (<Typography>Hello, {name}!</Typography>) : (<Typography>Hello!</Typography>);
    };
    return <Box>{displayHandler()}</Box>;

    function childrenDisplayHandler()
    {
        <Box bgcolor={"black"} color={"white"}>
            {children}
        </Box>
    }
}

export default Greeting;


