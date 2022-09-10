import { Ref, useRef, useState } from "react";
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
    children: JSX.Element,
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
const TabPanel = ({tabPanelId, selectedTab, index, ...props}:iTabPanel) => {
    return (
        <section
        role="tabpanel"
        id={tabPanelId}
        aria-label={tabPanelId}
        hidden={selectedTab !== index}
        tabIndex={0}
        >
        {props.children}
        </section>
    )
}
export default function Tab() {
    const tabValues = [
        {
            index:1,
            title: "recently added",
            content: <p>Hey</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:2,
            title: "general",
            content: <p>Hey</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:3,
            title: "coding",
            content: <p>code</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:4,
            title: "design",
            content: <p>Hey</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:5,
            title: "accessibility",
            content: <p>Hey</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:6,
            title: "writing",
            content: <p>Hey</p>,
            ref: useRef<HTMLButtonElement>(null)
        },
        {
            index:7,
            title: "career",
            content: <p>Hey</p>,
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
        console.log(tabToSelect)
        setselectedTab(tabToSelect);
        tabValues[tabToSelect-1].ref?.current?.focus()
      };
      const handleKeyPress = (event:React.KeyboardEvent<HTMLUListElement>) => {
        const tabCount = tabValues.length;
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
        {tabValues.map(tab => {
            return <TabItem key={tab.index} selectedTab={selectedTab} index={tab.index} text={tab.title} tabPanelId={tab.title} tabRef={tab.ref} handleChange={handleClick}/>
        })}  
        </ul>
        {tabValues.map(tab => {
            return <TabPanel key={tab.index} index={tab.index} selectedTab={selectedTab} tabPanelId={tab.title}>
                {tab.content}
            </TabPanel>
        })}
    </section>
  )
}
