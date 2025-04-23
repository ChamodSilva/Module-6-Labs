import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import LabButton from "./LabButton";

function EmojiMoods()
{
    const label = "Change Mood";
    const moodList = ["happy", "angry"];
    const [mood, setMood] = useState(moodList[1]);

    function moodDisplayHandler()
    {
        if(mood === moodList[0])
        {
            return <>😀</>;
        }
        return <>😡</>;
    };

    // Why doesn't this function work?
    function buttonDisplayHandler()
    {
        return <LabButton label={label} callFunction={updateMood()} />;
    };
    
    function updateMood()
    {
        if(mood === moodList[1])
        {
            setMood(prevMood => moodList[0]);
        }
        else
        {
            setMood(prevMood => moodList[1]);
        }
    }

    return(
        <Box>
            <Typography>The emoji is currently: {moodDisplayHandler()}</Typography>
            {/* {buttonDisplayHandler} --- Why doesnt this work? */}
            <LabButton label={label} callFunction={updateMood} />
        </Box>
    );
};

export default EmojiMoods;