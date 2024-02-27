import { createRoot } from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import  { store, persistor } from './store';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render( <Provider store={store}>
  <PersistGate persistor={persistor}>
    {/* <BrowserRouter> */}
      <App/>
    {/* </BrowserRouter> */}
  </PersistGate>
</Provider>);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
