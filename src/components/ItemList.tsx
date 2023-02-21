interface Props {
  items: Object
}

export const ItemList = ({ items }: Props) => {
  return (
    <ul>
      {Object.entries(items).map(([itemName, quantity]) => {
        return (
          <li key={itemName}>
            {itemName} - Quantity: {quantity}
          </li>
        )
      })}
    </ul>
  )
}
