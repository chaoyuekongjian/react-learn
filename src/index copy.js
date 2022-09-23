import React from 'react';
import ReactDOM from 'react-dom/client';

const arr = new Array(30);
arr.map((item, i) => (<li key={i}>{i}</li>))
const content = "<div>asdasd</div>"

const root = ReactDOM.createRoot(document.getElementById('root'));
const h1 = (<>
  123<span>span元素</span>
  <div>
    hello world
    {/* <div dangerouslySetInnerHTML={{
      __html: content
    }} /> */}
  </div>
</>);
root.render(h1);
