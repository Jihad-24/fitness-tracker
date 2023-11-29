import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Button, CardActionArea, Box, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';


const LatestNews = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const cardDetails = [
        {
            image: 'https://i.ibb.co/2k8KH8D/blog-1-375x225.jpg',
            title: 'Rest your way to health and vitality for health.',
            description: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the',

        },
        {
            image: 'https://i.ibb.co/wYTKpF2/blog-2-375x225.jpg',
            title: ' Fat loss, health tips, lifestyle, & healthy eating.',
            description: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas and devious Semikoli, ',

        },
        {
            image: 'https://i.ibb.co/nj8R75r/1000-F-630211721-NKRR1-Pq-ZBo-Rt5-V2t-Z2-XHi-ITCUcp-VJAtp.jpg',
            title: ' Proper way to recharge your body',
            description: 'Recharging your body involves several practices and habits that contribute to overall well-being and vitality.',

        },
    ];
    return (
        <Box textAlign="center" mx="auto" my={10} marginBottom={4}>
            <Typography variant="h4" gutterBottom>
                Latest <span style={{ color: '#3B82F6' }}>News</span>
            </Typography>
            <Typography variant="body1" color="#636262" fontSize="1.25rem" marginBottom={4}>
                Stay informed with our comprehensive coverage of the latest events, breaking news, and trending stories from around the world. Our dedicated team of journalists and reporters brings you up-to-the-minute updates.
            </Typography>
            <Container maxWidth='lg'>
            <Grid  container spacing={3} justifyContent="center" alignItems="center">
                {cardDetails.map((card, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Box textAlign="center">
                            <Card>
                                <CardActionArea>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 200, objectFit: 'cover' }}
                                            image={card.image}
                                            alt="Card Image"
                                        />
                                        <Badge
                                            color="primary"
                                            badgeContent={formattedDate}
                                            sx={{
                                                position: 'absolute',
                                                bottom: 15,
                                                left: 0,
                                                transform: 'translate(-50%, 50%)',
                                                minWidth: '150px',
                                                textAlign: 'center',
                                            }}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.title}    <Badge
                                                color="primary"
                                                badgeContent='New'
                                                sx={{
                                                    transform: 'translate(-50%, 50%)',
                                                    minWidth: '50px',
                                                    textAlign: 'center',
                                                }}
                                            />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.description}  <Button size="small" color="primary">
                                                <Link to={'/blog'}>Read More...</Link>
                                            </Button>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </Box>
    );
};

export default LatestNews;