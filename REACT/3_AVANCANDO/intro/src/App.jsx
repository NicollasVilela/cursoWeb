import './App.css'

import night from './assets/night.jpg'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      <img src="/img.jpg" alt="alguma imagem" />
      <img src={night} alt="alguma imagem" />
    </>
  );
}

export default App
