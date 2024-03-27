import React from 'react';
import { PrintComp } from './PrintComp';
import PrintButton from './UI/button/PrintButton';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';


export class Print extends React.PureComponent {
    constructor(props){
        super(props)
        this.props = props.props
    }
  render() {
    return (
      <div>
        <PrintComp props={this.props} ref={el => (this.componentRef = el)} />
        <ReactToPrint bodyClass="print-agreement" content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <PrintButton type="primary" style={{width: 150}} onClick={handlePrint}>Print</PrintButton>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        
      </div>
    );
  }
}