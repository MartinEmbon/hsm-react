import Rotas from "./routes"
import {ToastContainer} from "react-toastify"
import {Provider} from "react-redux"
import 'react-toastify/dist/ReactToastify.css';

import store from "./store"

function App() {
  return (
    <>    
    <Provider store={store}>
      <ToastContainer/>
      <Rotas/>    
    </Provider>
    </>
  );
}

export default App;
