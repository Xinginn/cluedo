import { Form } from './components/atoms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form.Input placeholder={'Login'}></Form.Input>
        <Form.Input placeholder={'Password'}></Form.Input>
        <Form.Input placeholder={'Votre message'}></Form.Input>
      </header>
    </div>
  );
}

export default App;
