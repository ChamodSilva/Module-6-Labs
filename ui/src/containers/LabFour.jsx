import { Typography, Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import BigCats from "../components/BigCats"
import { useState } from "react";

function LabFour()
{
    const filters = ["Ascending", "Descending"]
    const [filterType, setFilterType] = useState(filters[0]);
    const cats =
    [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', imgSrc: '../src/assets/images/Cheetah.png' },
        { name: 'Cougar', latinName: 'Puma concolor', imgSrc: '../src/assets/images/Cougar.png' },
        { name: 'Jaguar', latinName: 'Panthera onca', imgSrc: '../src/assets/images/Jaguar.png' },
        { name: 'Leopard', latinName: 'Panthera pardus', imgSrc: '../src/assets/images/Leopard.png' },
        { name: 'Lion', latinName: 'Panthera leo', imgSrc: '../src/assets/images/Lion.png' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', imgSrc: '../src/assets/images/Snow leopard.png' },
        { name: 'Tiger', latinName: 'Panthera tigris', imgSrc: '../src/assets/images/Tiger.png' },
    ];

    function changeFilter()
    {
        setFilterType((prev) =>
        {
            return prev === filters[0] ? filters[1] : filters[0];
        });
    };
    
    return (
        <Box>
            <Typography>Sorth Alphabetically</Typography>
            <ToggleButtonGroup value={filterType} exclusive onChange={changeFilter} aria-label="change filter type">
                <ToggleButton>
                    {filters[0]}
                </ToggleButton>
                <ToggleButton>
                    {filters[1]}
                </ToggleButton>
            </ToggleButtonGroup>
            <Typography variant="h4">Lab Four Content</Typography>
            <BigCats data={cats} />
        </Box>
    );
};

export default LabFour;
