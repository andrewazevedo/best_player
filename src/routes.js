import { StackNavigator } from 'react-navigation';

import PlayersList from 'screens/players_list';
import Player from 'screens/player';

const routes = StackNavigator({
  players_list: { screen: PlayersList },
  player: { screen: Player },
});

export default routes;
