export default function Button({ text,onClickFunction }) {
  return (
    <button onClick={onClickFunction}>{text}</button>
  )
}
