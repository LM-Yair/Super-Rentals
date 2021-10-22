import './App.css';
import Header from './Components/Header';
import Routes from './Components/Routes';
import Footer from './Components/Footer';

function App() {
  return (
    <section>
      <Header />
      <section className='principalContent'>
	<Routes />
      </section>
      <Footer />
    </section>
  );
}

export default App;
