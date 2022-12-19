import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed]=useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>setCollapsed(!collapsed)}>+</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: any) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}