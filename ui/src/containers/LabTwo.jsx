import { Typography, Box } from "@mui/material";
import BigCats from "../components/BigCats";

function LabTwo()
{
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

    return(
        <BigCats data={cats} />
    );
};

export default LabTwo;