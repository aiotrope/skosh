import { useState } from 'react'
import MyList from './MyList'

const MyContainer = () => {
  const title = 'Really epic list component'

  const list = [
    { id: '1', text: 'This is an item' },
    { id: '2', text: 'Also this' },
  ]
  const [items, setItems] = useState(list)
  

  return (
    <div>
      <MyList header={title} items={list} />
    </div>
  )
}

export default MyContainer
