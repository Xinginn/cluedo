import React, { useState } from "react";

import { Container, Form, Text } from "../atoms";

const PromptInput = () => {
  const [prompt, setPrompt] = useState()

  const submit = () => {
    console.log("should send message to Backend", prompt)
  }

  return (
    <Container.Row>
      <Form.TextArea onChange={(e) => {
        setPrompt(e.target.value)
      }}></Form.TextArea>
      <Form.Button onClick={() => submit()}>Go</Form.Button>
    </Container.Row>
  )
}

export default PromptInput