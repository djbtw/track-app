import { createContext,useState } from "react"

export const ItemContext = createContext();

export default function ItemContextProvider({ children }) {
  const [items,setItems] = useState([]);

  function onAddItem(item) {
    const newItem = {
      id: new Date().getTime(),
      checked: false,
      text: item
    }
    setItems(prev => [...prev,newItem])
  }

  return (
    <ItemContext.Provider value={{ items,onAddItem }}>{children}</ItemContext.Provider>
  )
}
