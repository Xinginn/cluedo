import { Form, Visual } from './components/atoms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form.Input placeholder={'Login'}></Form.Input>
        <Form.Input placeholder={'Password'}></Form.Input>
        <Form.Input placeholder={'Votre message'}></Form.Input>
        <Visual.Image src={'/assets/img/stitch1.webp'}></Visual.Image>
      </header>
    </div>
  );
}

export default App;