import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {Button} from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


const CharacterCard = (props) => {
  const deleteCharacter = (character) => {
    fetch(`http://localhost:3000/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then(() => props.fetchCharacters())
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const characterMapper = () => {
      return props.character.map((character) => {
        return (
          <div>
            <Card className={classes.root} style={{ width: "300px" }}>
              <CardContent>
                <h3>{character.name}</h3>
              </CardContent>
              <CardMedia
                className={classes.media}
                image=""
              />
              <CardActions disableSpacing>
              <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Edit</Button>
              <div id="spacer"> </div>
              <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography Typography variant="body2" color="textSecondary" component="p">
                    <li>{character.location}</li>
                    <li>{character.race}</li>
                    <li>{character.gender}</li>
                    <li>{character.age}</li>
                    <li>{character.alignment}</li>
                    <li>{character.profession}</li>
                    <li>{character.trait}</li>
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        )
      })
  }

  return (
    <div>
      <Grid container spacing={4} className={classes.gridContainer} justify="center">
        {characterMapper()}
      </Grid>
    </div>
  )
}

export default CharacterCard;
