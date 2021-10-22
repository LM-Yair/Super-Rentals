import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Nosotros from '../Pages/Nosotros';
import Contacto from '../Pages/Contacto';
import Mapa from '../Pages/Mapa';
import Error404 from '../Pages/Error404';

const Routes = () => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path='/' component={ Inicio } />
	<Route exact path='/nosotros' component={ Nosotros }/>
	<Route exact path='/contacto' component={ Contacto }/>
	<Route exact path='/mapa/:id' component={ Mapa }/>
	<Route path='*' component={ Error404 } />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
