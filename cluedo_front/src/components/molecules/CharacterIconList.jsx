import React from 'react'
import { Action, Container, Visual } from '../atoms'

const CharacterIconList = ({ characters }) => {

    const handleAccuse = (id) => {
        console.log('TODO Accuse button clicked. Character id : ', id)
    }

    return (
        <Container.Grid>
            {characters.map((character, index) => (
                <Action.Button key={index} onClick={() => handleAccuse(character.id)}>
                    <Visual.Icon src={`${character.face}`} />
                </Action.Button>
            ))}
        </Container.Grid>
    )
}

export default CharacterIconList