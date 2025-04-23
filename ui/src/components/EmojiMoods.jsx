import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

function EmojiMoods()
{
    const moodList = ["happy", "angry"];
    const [mood, setMood] = useState(moodList[1]);

    function moodDisplayHandler()
    {
        if(mood === moodList[0])
        {
            return <>😀</>;
        }
        return <>😡</>;
    }

    function updateMood()
    {
        // Update mood.
        if(mood === moodList[0])
        {
            setMood(1);
        }
        else
        {
            setMood(0);
        }
    }

    return(
        <Box>
            <Typography>The emoji's current mood is: {moodDisplayHandler()}</Typography>
            <Button onClick={updateMood()}>Change Mood</Button>
        </Box>
    );
};

export default EmojiMoods;