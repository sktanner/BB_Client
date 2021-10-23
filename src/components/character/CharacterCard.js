import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import APIURL from '../../helpers/environment';
import CardDisplay from './CardDisplay'
import CharacterEdit from './CharacterEdit';

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
  const [isLoaded, setIsLoaded] = useState()
  const [image, setImage] = useState()
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [character, setCharacter] = useState([])
  const [updateActive, setUpdateActive] = useState(false)
  const [characterToUpdate, setCharacterToUpdate] = useState([])


  const fetchCharacters = () => {
    fetch(`${APIURL}/character/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      })
    }).then((res) => res.json())
      .then((charData) => {
        setCharacter(charData)
        console.log(charData);
      })
  }


  const editUpdateCharacter = (character) => {
    setCharacterToUpdate(character)
    console.log(character);
}

const updateOn = () => {
    setUpdateActive(true)
}

const updateOff = () => {
    setUpdateActive(false)
}


  useEffect(() => {
    fetchCharacters()
}, [])


  return (
    <div>
      <CardDisplay character={character} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token} />

      {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters} /> : <></>}
    </div>
  )
}

export default CharacterCard;