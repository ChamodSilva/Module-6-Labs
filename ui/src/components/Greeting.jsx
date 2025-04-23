import { Box, Typography } from "@mui/material";

function Greeting({ name="World", children })
{
    function displayHandler()
    {
        return (<Typography>Hello, {name}!</Typography>);
    };

    function childrenDisplayHandler()
    {
        return(
            <Box>
                {children}
            </Box>
        );
    }

    return(
        <Box>
            {displayHandler()}
            {childrenDisplayHandler()}
        </Box>
    );
};

export default Greeting;
