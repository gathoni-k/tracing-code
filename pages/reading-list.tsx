import { NextPage } from 'next';
import Tab from '../components/Tab/Tab';

const ReadingList: NextPage = () =>{
  return (
    <div>
        <p style={{textAlign:"center"}}>A collection of materials that I have learned a lot from.</p>
        <Tab/>
    </div>
  )
}


export default ReadingList