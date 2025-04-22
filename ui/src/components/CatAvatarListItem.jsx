import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";

function CatAvatarListItem({name, latinName, imgSrc})
{
    return(
        <ListItem key={latinName}>
            <ListItemAvatar>
                <Avatar alt={name} src={imgSrc} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={latinName} />
        </ListItem>
    );
};

export default CatAvatarListItem;