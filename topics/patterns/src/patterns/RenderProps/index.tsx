import React from 'react'
import List from './List'

const RenderProps = () => {

    const items = ["Kasparov", "Fischer", "Deep Blue", "Capablanca", "Karpov"];

    const simpleRender = (item: string , key : number) => <li key={key}>{item}</li>;

    const fancyRender = (item: string , key : number) => <li style={{fontWeight : "bold", color :"purple"}} key={key}>{key} - {item}</li>;

   return (
       <div>
           <h1>Simple Render</h1>
           <List items={items} render={simpleRender}/>

          <h1 style={{color : "purple"}}>Fancy Render</h1>
           <List items={items} render={fancyRender}/>
       </div>
   )
}
export default RenderProps;