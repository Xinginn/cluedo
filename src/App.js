import { Form } from './components/atoms'

import { Text } from './components/atoms';

function App() {
  return (
    <div className="App">
      <Text.Title text="Un titre imposant"></Text.Title>
      <Text.Paragraph style={{width: "80px"}} text="Ceci est un paragraph assez long, hsitoire de voir"></Text.Paragraph>
      
    </div>
  );
}

export default App;
