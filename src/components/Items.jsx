import { useItemContext } from "../hooks/customHooks"

export default function Items() {
  const { items,onDeleteItem,onCheckBoxChange } = useItemContext();

  return (
    <div className="itemsList">
      {items.map(item => <div key={item.id} className="item">
        <label className="item-label">
          <input onChange={() => onCheckBoxChange(item.id)} checked={item.checked} type="checkbox"></input>
          <p>{item.text}</p>
          <span onClick={() => onDeleteItem(item.id)} className="item-icon">❌</span>
        </label>
      </div>)}
    </div>
  )
}
