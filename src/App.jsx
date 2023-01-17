import './App.css';
import { HomePage, ProductPage, CartPage } from './pages';
import { ProductCard, SearchBar} from './components'
import Header from './containers/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <ProductCard/>
      <SearchBar/>
      <CartPage/>
      <ProductPage/>
      
    </div>
  );
}

export default App;
