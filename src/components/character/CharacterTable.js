import React from 'react'
import {Table, Button} from 'reactstrap'
import APIURL from '../../helpers/environment'

const CharacterTable = (props) => {
  const deleteCharacter = (character) => {
    fetch(`${APIURL}/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then(() => props.fetchCharacters())
  }

  const CharacterMapper = () => {
    console.log(props.character);
        return props.character.map((character, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{character.name}</th>
                    <td>{character.location}</td>
                    <td>{character.race}</td>
                    <td>{character.gender}</td>
                    <td>{character.age}</td>
                    <td>{character.alignment}</td>
                    <td>{character.profession}</td>
                    <td>{character.trait}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Edit</Button>
                        
                    </td>
                    <td>
                        <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
  }

  return(
    <>
    <Table hover id="charTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Race</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Alignment</th>
                <th>Profession</th>
                <th>Trait</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {CharacterMapper()}
        </tbody>
    </Table>
    </>
)
}

export default CharacterTable




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import CharacterCreate from './CharacterCreate';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, location, race, gender, age, alignment, profession, trait) {
//   return { name, location, race, gender, age, alignment, profession, trait };
// }

// export default function CharacterTable(props) {
//   const classes = useStyles();
//   // const [rows, setRows] = React.useState([])

//   console.log(props.character)
// // React.useEffect(() => {
// //   setRows([
// //     // props.character.map((character) => {

// //     // })
    
// //   createData('Sarah', 'Ravenloft', 'Elf', 'Female', 'Adult', 'Chaotic Neutral', 'Warlock', 'Impatient'),
// //   ])
// // }, [])

// return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Location</TableCell>
//             <TableCell align="right">Race</TableCell>
//             <TableCell align="right">Gender</TableCell>
//             <TableCell align="right">Age</TableCell>
//             <TableCell align="right">Alignment</TableCell>
//             <TableCell align="right">Profession</TableCell>
//             <TableCell align="right">Trait</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.character.map((character) => (
//             <TableRow key={character.name}>
//               <TableCell component="th" scope="row">
//                 {character.name}
//               </TableCell>
//               <TableCell align="right">{character.location}</TableCell>
//               <TableCell align="right">{character.race}</TableCell>
//               <TableCell align="right">{character.gender}</TableCell>
//               <TableCell align="right">{character.age}</TableCell>
//               <TableCell align="right">{character.alignment}</TableCell>
//               <TableCell align="right">{character.profession}</TableCell>
//               <TableCell align="right">{character.trait}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }