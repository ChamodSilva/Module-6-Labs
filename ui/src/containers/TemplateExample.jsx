import {Box} from '@mui/material';
import Card from '../components/Card.jsx'

function TemplateExample()
{
    //Variables

    //Functions

    //Return
    return(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            Template Example
            <Card imgSource={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}  bodyText={"This is a green iguana!"}/>
            <Card imgSource={""} bodyText={"this a test!"}/>
        </Box>
    );
}

export default TemplateExample;
