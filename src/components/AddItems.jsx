import Button from './Button'
import { useItemContext } from '../hooks/customHooks';
import { useState } from 'react';

export default function AddItems() {
  const [addItem,setAddItem] = useState('');
  const { onAddItem } = useItemContext();

  return (
    <div>
      <section>
        <input onChange={e => setAddItem(e.target.value)} type='text'></input>
        <Button text={'Add Item'} onClickFunction={() => { onAddItem(addItem) }}></Button>
      </section>
      <section>
        <Button text={'makr complete'}></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </section>
    </div >
  )
}
