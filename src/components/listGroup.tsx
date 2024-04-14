import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelect: (items: string) => void;
}
function ListGroup({ items, heading, onSelect }: Props) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectIndex(index);
              onSelect(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
