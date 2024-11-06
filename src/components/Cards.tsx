import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 220 }} className='h-max'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://atanurrannagharrecipe.com/wp-content/uploads/2024/01/Kolkata-style-Mutton-Biriyani-Atanur-Rannaghar.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            <p className='text-lg'>Biriyani</p>
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
