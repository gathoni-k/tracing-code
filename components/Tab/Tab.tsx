import { Ref, useRef, useState } from "react";
import { resource } from "../../lib/types";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import styles from "./tab.module.scss";

interface iTabItem{
    text: string,
    selectedTab: number,
    index: number,
    tabPanelId: string,
    handleChange: Function,
    tabRef: Ref<any>
}

interface iTabPanel{
    selectedTab: number,
    index: number,
    tabPanelId: string,
    content: any
}


const TabItem = ({text, selectedTab, index, tabPanelId, handleChange, tabRef}:iTabItem) =>  {
    const handleClick = () => handleChange(index)
    const active = selectedTab === index
    return (
        <li role='presentation' className={styles.listitem}>
            <button role='tab' ref={tabRef} tabIndex={selectedTab === index ? 0 : -1} className={active?styles.active:''} aria-selected={selectedTab===index} aria-controls={tabPanelId} onClick={handleClick}>{text}</button>
        </li>
    )
}
const TabPanel = ({tabPanelId, selectedTab, index,content}:iTabPanel) => {
    return (
        <section
        role="tabpanel"
        id={tabPanelId}
        aria-label={tabPanelId}
        hidden={selectedTab !== index}
        style={{marginTop: "3rem"}}
        >
            <Cards cards={content}/>
        </section>
    )
}
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

export default function Tab({resources}:iResources) {
    const tabVals = [
        {
            index:1,
            title: "recently added",
            content: resources.recent,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:2,
            title: "general",
            content: resources.general,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:3,
            title: "coding",
            content: resources.coding,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:4,
            title: "design",
            content: resources.design,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:5,
            title: "accessibility",
            content: resources.accessibility,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:6,
            title: "writing",
            content: resources.writing,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:7,
            title: "career",
            content: resources.career,
            ref: useRef<HTMLButtonElement>(null)
        },
    ]
    // set the selected tab
    const [selectedTab, setselectedTab] = useState(1)
    const handleClick = (index:number) => setselectedTab(index)
    const handleNextTab = (
        firstTabInRound: number,
        nextTab: number,
        lastTabInRound: number
      ) => {
        const tabToSelect =
          selectedTab === lastTabInRound ? firstTabInRound : nextTab;
        setselectedTab(tabToSelect);
        tabVals[tabToSelect-1].ref?.current?.focus()
      };
      const handleKeyPress = (event:React.KeyboardEvent<HTMLUListElement>) => {
        const tabCount = tabVals.length;
        if (event.key === "ArrowLeft") {
          const last = tabCount;
          const next = selectedTab - 1;
          handleNextTab(last, next, 1);
        }
        if (event.key === "ArrowRight") {
          const first = 1;
          const next = selectedTab + 1;
          handleNextTab(first, next, tabCount);
        }
      };
  return (
    <section>
        <ul className={styles.tablist}  role="tablist" aria-label="List of tabs" onKeyDown={handleKeyPress}>  
        {tabVals.map(tab => {
            return <TabItem key={tab.index} selectedTab={selectedTab} index={tab.index} text={tab.title} tabPanelId={tab.title} tabRef={tab.ref} handleChange={handleClick}/>
        })}  
        </ul>
        {tabVals.map(tab => {
            return <TabPanel key={tab.index} index={tab.index} selectedTab={selectedTab} tabPanelId={tab.title} content={tab.content}/>
        })}
    </section>
  )
}
