import {List} from "@mui/material";
import CatAvatarListItem from "./CatAvatarListItem";

function BigCats({data})
{
    function itemDisplayHandler()
    {
        if(!data)
        {
            return <Typography>No data was found!</Typography>;
        }
        return data.map((cat) =>
        (
            <CatAvatarListItem
                key={cat.latinName}
                name={cat.name}
                latinName={cat.latinName}
                imgSrc={cat.imgSrc}
            />
        ));
    }

    return <List>{itemDisplayHandler()}</List>;
};

export default BigCats;