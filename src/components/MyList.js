const MyList = (props) => {
  const list = props.items
  return (
    <>
      <h1>{props.header}</h1>
      <ol>
        {list.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ol>
    </>
  )
}

export default MyList
