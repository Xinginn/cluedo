import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Visual, Text } from '../components/atoms'
import { CharacterList } from '../components/molecules'

const Result = () => {

    const currentCharacter = useSelector((state) => {
        return state.currentCharacterHistorySlice.currentCharacter.character
    })
    const investigation = useSelector((state) => {
        return state.investigationHistorySlice.investigation
    })

    return (
        <Container.Column width={'100%'} bgColor={'transparent'}>
            <Visual.Background url={'/assets/img/backgrounds/courtroom.jpg'}></Visual.Background>
            <Container.Column bgColor={'#fcdd62'} width={'100%'}>
                <Text.Title>
                    {currentCharacter.isKiller ? 'Bravo' : 'Perdu'}
                </Text.Title>
            </Container.Column>
            <Container.Column bgColor={'#dddddda3'}>
                <Text.Paragraph>
                    {investigation.events}
                </Text.Paragraph>
            </Container.Column>
            <Container.Column bgColor={'transparent'}>
                <CharacterList characters={investigation.characters} accuse={true} />
            </Container.Column>
        </Container.Column>
    )
}

export default Result