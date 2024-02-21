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

  function onDeleteItem(id) {
    const newItems = items.filter(item => item.id != id);
    setItems(newItems);
  }

  function onCheckBoxChange(id) {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item
    })
    setItems(newItems);
  }

  return (
    <ItemContext.Provider value={{ items,onAddItem,onDeleteItem,onCheckBoxChange }}>{children}</ItemContext.Provider>
  )
}
