import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Aliados from './Page/Aliados/Aliados.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Components/Cards.js';
import Compañeros from './Page/Compañeros/Compañero.js';
import Enemigos from './Page/Enemigos/Enemigos.js';
import Misiones  from './Page/Misiones/Misiones';
import Patrocinado  from './Page/Patrocinadores/Patrocinado.js';
import Salvada from './Page/Salvadas/Salvadas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>
        <Switch>
          <Route exact path='/' component={Card}/>
          <Route exact path='/aliados' component={Aliados}/>
          <Route exact path='/compañeros' component={Compañeros}/>
          <Route exact path='/misiones' component={Misiones}/>
          <Route exact path='/enemigos' component={Enemigos}/>
          <Route exact path='/patrocinador' component={Patrocinado}/>
          <Route exact path='/salvadas' component={Salvada}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
