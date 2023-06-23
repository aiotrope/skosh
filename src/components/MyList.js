const MyList = (props) => {
  const list = props.items

  return (
    <>
      <h1>{props.header}</h1>
      <ol>
        {list.map((element, idx) => (
          <li
            key={idx}
            onClick={() => props.updateItem(idx)}
            className={element.clicked ? 'li-linethrough' : null}
          >
            {element.text}
          </li>
        ))}
      </ol>
    </>
  )
}

export default MyList
