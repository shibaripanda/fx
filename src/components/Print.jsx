import React from 'react';
import ReactToPrint from 'react-to-print';
import { PrintComp } from './PrintComp';
import PrintButton from './UI/button/PrintButton';

export class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#"><PrintButton style={{width: 110}}>Print</PrintButton></a>;
          }}
          content={() => this.componentRef}
        />
        <PrintComp ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}