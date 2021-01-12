import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Skeleton from '@material-ui/lab/Skeleton';
import CardComponent from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const numOfHeaderLines = 7;
const FEMALE_AVATAR = 'swg-leia-2';
const MALE_AVATAR = 'swg-lukeskywalker';
const STARSHIP_AVATAR = 'swg-jedistarfight';
const UNKNOWN_AVATAR = 'swg-yoda-3';
const NA_AVATAR = 'swg-r2d2-2';

const useStyles = makeStyles(theme => ({
  container: {
    width: 'calc(230px + 15vw)',
    maxWidth: '480px',
    margin: theme.spacing('calc(4px + 1vh)', 'calc(4px + 1vw)'),
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
  avatarContainer: {
    color: '#777',
    backgroundColor: '#EEE',
    borderRadius: '50%',
    width: 'calc(30px + 10vh)',
    height: 'calc(30px + 10vh)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarFont: {
    fontSize: 'calc(10px + 10vh)',
    marginTop: 'calc(3px + 1vh)',
    marginLeft: '0.5vw'
  },
  text: {
    wordBreak: 'break-all',
    fontSize: 'calc(5px + 1vh)'
  }
}));

const Card = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const { name, gender } = props;
  const avatarName = (gender === undefined)
    ? STARSHIP_AVATAR
    : (gender === 'male')
      ? MALE_AVATAR
      : (gender === 'female')
        ? FEMALE_AVATAR
        : (gender === 'unknown')
          ? UNKNOWN_AVATAR
          : NA_AVATAR;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const generateBodyLines = () => {
    const lines = [];

    for (const [key, value] of Object.entries(props)) {
      if (lines.length >= numOfHeaderLines) {
        lines.push(
          <Typography
            key={key}
            className={classes.text}
            color="textSecondary"
          >
            {`${key}: ${value}`}
          </Typography>)
      } else {
        lines.push(null);
      }
    }

    return lines;
  }

  const generateHeaderLines = () => {
    const lines = [];

    for (const [key, value] of Object.entries(props)) {
      if (lines.length < numOfHeaderLines) {
        lines.push(
          <Typography
            key={key}
            className={classes.text}
            variant="body2"
          >
            {`${key}: ${value}`}
          </Typography>
        )
      }
    }

    return lines;
  }

  return (
    <div>
      <CardComponent className={classes.container}>
        <CardHeader
          avatar={
            (name === undefined)
              ? <Skeleton variant="circle" className={classes.avatarContainer} />
              : <div className={classes.avatarContainer}><i className={classes.avatarFont + ' swg ' + avatarName} /></div>
          }
          subheader={
            name
              ? (
                <>
                  {generateHeaderLines()}
                </>
              )
              : (
                <>
                  <Skeleton width="50%" />
                  <Skeleton width="40%" />
                  <Skeleton width="45%" />
                  <Skeleton width="48%" />
                  <Skeleton width="35%" />
                  <Skeleton width="30%" />
                  <Skeleton width="40%" />
                </>
              )
          }
        />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {
            name
              ? (
                <CardContent>
                  {generateBodyLines()}
                </CardContent>
              )
              : (
                <CardContent>
                  <Skeleton width="50%" />
                  <Skeleton width="150%" />
                  <Skeleton width="45%" />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width="70%" />
                  <Skeleton width="40%" />
                  <Skeleton width="40%" />
                </CardContent>
              )
          }
        </Collapse>
      </CardComponent>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  birth_year: PropTypes.string,
  eye_color: PropTypes.string,
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  skin_color: PropTypes.string,
  homeworld: PropTypes.string,
  films: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
  url: PropTypes.string,
  created: PropTypes.string,
  edited: PropTypes.string,
}


export { Card };