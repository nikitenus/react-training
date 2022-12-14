import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffComponent} from "./components/onOFF/onOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<Accordion titleValue={"menu1"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"menu2"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={0}/>*/}

            <UncontrolledAccordion titleValue={"menu 1"}/>

            <UncontrolledRating/>

            <OnOffComponent on={true}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;
