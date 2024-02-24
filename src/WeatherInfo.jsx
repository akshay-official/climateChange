import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherInfo({result}) {
    const HOT_URL = "https://assets.thehansindia.com/h-upload/2020/03/05/951243-hot-weather.webp";
    const COLD_URL = "https://www.redcross.ca/crc/img/Winter_2.jpg?ext=.jpg";
    const RAINY_URL = "https://img.freepik.com/free-vector/nature-raining-scene_1308-22369.jpg";
    const ERR_URL = "https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={result.error ? ERR_URL : result.humidity > 80 ? RAINY_URL : result.temp > 15 ? HOT_URL : COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {!result.error ? <h5>{result.city}{result.humidity > 80 ? <ThunderstormIcon/> : result.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}</h5> : <h5>Oops!</h5>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={'span'}>
            {!result.error ? 
            <div><p>Temperature : {result.temp}&deg;C</p>
            <p>Humididty : {result.humidity}</p>
            <p>Min Temperature : {result.temp_min}&deg;C</p>
            <p>Max Temperature : {result.temp_max}&deg;C</p>
            <p>The Weather Feels Like : {result.feels_like}&deg;C</p>
            <p>The Weather can be described as {result.weather} and feels like {result.feels_like}</p></div> : <p>
"Sorry, but it seems that the city you searched for does not exist. Please double-check the spelling or try searching for a different city. If you need further assistance, feel free to ask!"</p>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}