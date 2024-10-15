import React from 'react'
import { useSelector } from 'react-redux'

import { Header } from '../components/molecules'
import { CharacterIconList } from '../components/molecules'
import { Container, Visual } from '../components/atoms'

const Accuse = () => {

    const characters = useSelector((state) => {
        return state.characterHistory.characters;
    })

    return (
        <Container.Column>
            <Header title='Accuser' link='/note' icon={'go-back'} timer='07:35' />
            <CharacterIconList characters={characters} />
            <Visual.Background url={'/assets/img/backgrounds/courtroom.jpg'}></Visual.Background>
        </Container.Column>
    )
}

export default Accuse