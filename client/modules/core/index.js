import actions from './actions';
import methodStubs from './configs/method_stubs';
import routes from './routes.jsx';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
