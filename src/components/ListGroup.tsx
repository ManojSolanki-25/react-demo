// import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["manoj", "himanshu", "piyush", "rohit", "yogesh"];
  // items = [];

  // const getMessage = () => {
  //   return items.length === 0 && <p>no item found</p>;
  // };

  // Event Handling
  const eventHandler = (event: MouseEvent) => console.log(event);
  return (
    // <Fragment>
    <>
      {/* <h1> Manoj Solanki</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">A fifth item</li>
        <li className="list-group-item">And a sixth one</li>
      </ul> */}

      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={eventHandler}>
            {item}
          </li>
        ))}
      </ul>
    </>

    // </Fragment>
  );
}

export default ListGroup;
