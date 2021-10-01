import React from 'react'
import './App.css'
import Page from './component/Page/Page'

import {Provider} from 'react-redux'
import Store from './utils/store'

function App(){
  return (
    <Provider store={Store}>
      <Page/>
    </Provider>
  );
}

export default App
