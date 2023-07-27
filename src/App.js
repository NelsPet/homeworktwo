import { Header } from "./home/header";
import { Main } from "./home/main"
import { Footer } from "./home/footer"
import './home/home.css'


function App() {

  return (
    <div className="App">
      <Header />
      <Main display={'flex'} height={'500px'} justifyContent={'center'}/>
      < Footer />
    </div>
  );
}

export default App;
