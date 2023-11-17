import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Main from '../views/pages/main';

const routes = {
  '/': Main,
  '/main': Main,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
