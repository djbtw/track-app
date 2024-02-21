import { useItemContext } from "../hooks/customHooks"

export default function Items() {
  const { items } = useItemContext();
  return (
    <div>
      {items.map(item => <div key={item.id}>
        <h1>{item.id}</h1>
        <label>
          <input checked={item.checked} type="checkbox"></input>
          <h1>{item.text}</h1>
        </label>
      </div>)}
    </div>
  )
}
