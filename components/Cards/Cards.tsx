import { resource } from "../../lib/types"
import Card from "../Card/Card"

interface iCards{
    cards: resource[]
}
export default function Cards({cards}:iCards) {
  return (
    <>
    <ul style={{margin: 0, padding: 0}}>
        {cards.map((card, index) => {
            return <Card key={index} title={card.title} link={card.link} tag={card.category}  name={card.name}/>
        })}
    </ul>
    </>
  )
}
