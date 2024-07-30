function Message(){
  const name = "Manoj Solanki";
  const name1 = "Manoj";
  if (name && name1)
    return <h1> Hello {name} {name1} !!!</h1>;
  return <h1>Hello World !!!</h1>
}

export default Message;