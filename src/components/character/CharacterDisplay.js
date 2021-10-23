import { React, useEffect, useState } from 'react'
import { Card } from 'reactstrap'

const CharacterDisplay = (props) => {
    const [isLoaded, setIsLoaded] = useState()
    const [image, setImage] = useState()

    const CharacterDisplayCurrent = () => {
        let charLength = props.character.length
        if (charLength != 0) {
            return (
                <div>
                    <p>{props.character[charLength - 1].name} is a {props.character[charLength - 1].gender}, {props.character[charLength - 1].age} {props.character[charLength - 1].race}.</p>
                    <p>{props.character[charLength - 1].name} is located in {props.character[charLength - 1].location}, and their alignment is {props.character[charLength - 1].alignment}.</p>
                    <p>{props.character[charLength - 1].name} is a {props.character[charLength - 1].profession} and is {props.character[charLength - 1].trait}.</p>
                </div>
            )
        }
    }

    const CharacterDisplayImage = () => {
        let charLength = props.character.length
        if (charLength != 0) {
            setIsLoaded(true)

            let imgGender = props.character[charLength - 1].gender
            let imgRace = props.character[charLength - 1].race
            console.log(imgGender)
            console.log(imgRace)

            const resources = {
                Female_Dragonborn: 'Dragonborn.png',
                Female_Dwarf: 'Female_Dwarf.png',
                Female_Elf: 'Female_Elf.png',
                Female_Gnome: 'Female_Gnome.png',
                Female_HalfElf: 'Female_HalfElf.png',
                Female_Halfling: 'Female_Halfling.png',
                Female_HalfOrc: 'Female_HalfOrc.png',
                Female_Human: 'Female_Human.png',
                Female_Tiefling: 'Female_Tiefling.png',
                Male_Dragonborn: 'Dragonborn.png',
                Male_Dwarf: 'Male_Dwarf.png',
                Male_Elf: 'Male_Elf.jpg',
                Male_Gnome: 'Male_Gnome.png',
                Male_HalfElf: 'Male_HalfElf.png',
                Male_Halfling: 'Male_Halfling.png',
                Male_HalfOrc: 'Male_HalfOrc.jpg',
                Male_Human: 'Male_Human.png',
                Male_Tiefling: 'Male_Tiefling.jpg',
                Default: 'Logo.png'
            }

            if (imgGender && imgRace) {
                let imgLookup = resources[`${imgGender}_${imgRace}`]
                let imgSrc = imgLookup ? imgLookup : resources.Default
                setImage("./assets/" + imgSrc)
            }

        }
    }

    useEffect(() => {
        CharacterDisplayImage()
        CharacterDisplayCurrent()
    }, [CharacterDisplayImage])


    return (
        <>
        {props.character.length > 0 &&
        <Card id="display">
            {CharacterDisplayCurrent()}
            {isLoaded ? <img src={image} id="image" /> : ""}
        </Card>}
        </>
    )

}

export default CharacterDisplay