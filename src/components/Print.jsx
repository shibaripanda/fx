import React from 'react';
import { PrintComp } from './PrintComp';
import PrintButton from './UI/button/PrintButton';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';


export class Print extends React.PureComponent {
    constructor(props, setPrint){
        super(props)
        this.post = props.props
        
    }
  render() {
    return (
      <div>
        <PrintComp props={this.post} print={this.props.print} setPrint={this.props.setPrint} ref={el => (this.componentRef = el)} />
        <ReactToPrint content={() => this.componentRef}>
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