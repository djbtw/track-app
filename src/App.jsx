
import './App.css'
import Items from './components/Items'
import Header from './components/Header'
import AddItems from './components/AddItems'
import ItemContextProvider from './ItemContext/ItemContextProvider'

function App() {

  return (
    <ItemContextProvider>
      <div className='container'>
        <div>
          <Header></Header>
          <div className='content'>
            <Items></Items>
            <AddItems></AddItems>
          </div>
        </div>
      </div>
    </ItemContextProvider>
  )
}

export default App
