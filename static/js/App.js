import React from "react";


var $ = require('jquery');



export default class App extends React.Component {


  render () {
    return (
      <PageHeader>
        <div className='header-contents'>
          React
          <Hello name='Rimini' />
        </div>
      </PageHeader>
    );
  }
}
