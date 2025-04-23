import { Button } from "@mui/material";

function LabButton({label, callFunction})
{
    return(
        <Button onClick={callFunction}>{label}</Button>
    );
};

export default LabButton;