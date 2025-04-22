import { Box, Typography } from "@mui/material";

function Greeting({ name="World", children })
{
    function displayHandler()
    {
        return (<Typography>Hello, {name}!</Typography>);
    };

    function childrenDisplayHandler()
    {
        <Box bgcolor={"black"} color={"white"}>
            {children}
        </Box>
    }

    return(
    <Box>

    </Box>
    ) <Box>{displayHandler()}</Box>;
}

export default Greeting;
