import { NextPage } from 'next';
import Tab from '../components/Tab/Tab';
import { getByCategory, getRecentlyAdded } from '../helpers/resources'
import { resource } from '../lib/types';


interface iResources {
  resources: {
      recent: resource[],
      general: resource[],
      coding:resource[],
      design:resource[],
      accessibility: resource[],
      writing: resource[],
      career: resource[]
  }

}
const ReadingList: NextPage<iResources> = ({resources}) =>{
  return (
    <div>
        <p style={{textAlign:"center"}}>A collection of materials that I have learned a lot from.</p>
        <Tab resources={resources}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const recent = await getRecentlyAdded()
  const coding = await getByCategory('coding')
  const general = await getByCategory('general')
  const design = await getByCategory('design')
  const accessibility = await getByCategory('accessibility')
  const writing = await getByCategory('writing')
  const career = await getByCategory('career')
  const resources = {
    recent, coding, general, design, accessibility, writing, career
  }
  return {
    props: { resources },
  };
}
export default ReadingList