import React, { useState } from "react"

import { Container, Form } from "../atoms"
import { useDispatch, useSelector } from "react-redux"
import { addCharacterDiscussion, queryAnswer } from "../../store/investigationStore"
import { FormContainer } from "../atoms/Form"


const PromptInput = () => {
  const [prompt, setPrompt] = useState()
  const dispatch = useDispatch()
  const currentCharacter = useSelector((state) => state.currentCharacterHistorySlice.currentCharacter)
  const token = useSelector((state) => state.userHistorySlice.token)

  const submit = (e) => {
    e.preventDefault()
    if (prompt === '') {
      return
    }
    const payload = {
      characterId: currentCharacter.id,
      discussion: { prompt },
    }
    dispatch(addCharacterDiscussion(payload))
    dispatch(queryAnswer({ characterId: currentCharacter.id, prompt, token }))
    setPrompt('')
  }

  return (
    <FormContainer onSubmit={(e) => submit(e)}>
      <Container.Row bgColor={'transparent'}>
        <Form.Input value={prompt} onChange={(e) => {
          setPrompt(e.target.value)
        }}></Form.Input>
        <Form.Button type="submit">Go</Form.Button>
      </Container.Row>
    </FormContainer>
  )
}

export default PromptInput