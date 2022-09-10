import Card from "../Card/Card"

type Card =  {
    title: string,
    link: string,
    tag: string
}
interface iCards{
    cards: Card[]
}
export default function Cards({cards}:iCards) {
  return (
    <ul>
        {cards.map(card => {
            return <Card key={card.title} title={card.title} link={card.link} tag={card.tag}/>
        })}
    </ul>
  )
}
