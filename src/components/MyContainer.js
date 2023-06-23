import { useState } from 'react'
import MyList from './MyList'

const AddForm = (props) => {
  const [text, setText] = useState('')

  const onChange = (event) => {
    event.persist()

    setText(event.target.value)
  }

  const onSubmit = (event) => {
    if (event) event.preventDefault()

    let last_item = props.items[props.items.length - 1] // last element

    let inncrement_id = parseInt(last_item.id) + 1

    let data = { id: inncrement_id.toString(), text: text, clicked: false }

    props.setItems((prevItemsState) => [...prevItemsState, data])

    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor='add-item'>Item Form</label>
      </p>
      <textarea id='add-item' value={text} onChange={onChange} placeholder='Add an item' />
      <br />
      <button type='submit'>ADD</button>
    </form>
  )
}

const MyContainer = () => {
  const title = 'Really epic list component'

  const list = [
    { id: '1', text: 'This is an item', clicked: false },
    { id: '2', text: 'Also this', clicked: false },
  ]
  const [items, setItems] = useState(list)

  const updateItem = (id) => {
    let _id = parseInt(id)

    let newItems = [...items]

    newItems[_id] = { ...items[_id], clicked: true }

    console.log(newItems)

    setItems(newItems)
  }
  console.log(items)
  return (
    <div>
      <AddForm items={items} setItems={setItems} />
      <MyList header={title} items={items} updateItem={updateItem} />
    </div>
  )
}

export default MyContainer
