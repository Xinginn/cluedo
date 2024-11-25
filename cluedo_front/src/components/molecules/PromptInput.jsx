import React, { useState } from "react"

import { Container, Form } from "../atoms"
import { useDispatch, useSelector } from "react-redux"
import { addCharacterDiscussion, queryAnswer } from "../../store/investigationStore"


const PromptInput = () => {
  const [prompt, setPrompt] = useState()
  const dispatch = useDispatch()
  const currentCharacter = useSelector((state) => state.currentCharacterHistorySlice.currentCharacter)

  const submit = () => {
    console.log("should send message to Backend", prompt)
    const payload = {
      characterId: currentCharacter.id,
      discussion: { prompt },
    }
    dispatch(addCharacterDiscussion(payload))
    dispatch(queryAnswer({ characterId: currentCharacter.id, prompt }))
  }

  return (
    <Container.Row bgColor={'transparent'}>
      <Form.TextArea onChange={(e) => {
        setPrompt(e.target.value)
      }}></Form.TextArea>
      <Form.Button onClick={() => submit()}>Go</Form.Button>
    </Container.Row>
  )
}

export default PromptInput