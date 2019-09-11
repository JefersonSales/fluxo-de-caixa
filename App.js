import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/pages/Home/Index';
import Cadastro from './src/pages/Cadastro/Index';
import Login from './src/pages/Login/Index';
import Interna from './src/pages/Interna/Index';
import Preload from './src/pages/Preload/Index';
import AddReceita from './src/pages/Interna/AddReceita';
import AddDespesa from './src/pages/Interna/AddDespesa';

const MainNavigator = createStackNavigator({
  Preload: { screen: Preload },
  Interna: { screen: Interna },
  Home: { screen: Home },
  Cadastro: { screen: Cadastro },
  Login: { screen: Login },
  AddReceita: { screen: AddReceita },
  AddDespesa: { screen: AddDespesa }
});

const App = createAppContainer(MainNavigator);

export default App;