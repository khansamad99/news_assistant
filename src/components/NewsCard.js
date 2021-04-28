import React from 'react'
import {useStyles} from './style'
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
    const classes = useStyles();
  
    return (
      <Grid item xs={12} lg={3} style={{ display: 'flex', border: activeArticle === i ? '2px solid red' : null }}>
        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <CardActionArea href={url}>
            <CardMedia className={classes.media} image={urlToImage} title={title} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography className={classes.date} variant="body2" color="textSecondary" component="h2">{`${(new Date(publishedAt)).toDateString()} ${(new Date(publishedAt)).toLocaleTimeString()}`}</Typography>
              <Typography className={classes.source} variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
            </div>
            <Typography style={{ paddingLeft: '16px' }} gutterBottom variant="h5" component="h2">{title}</Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Learn More</Button>
            <Typography variant="body2" color="textSecondary" component="h2">{i}</Typography>
          </CardActions>
        </Card>
      </Grid>
    );
  };
  
  export default NewsCard;