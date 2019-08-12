import React, { PureComponent, ReactNode } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export interface FirstAgGridSampleState {
  columnDefs: ColDef[];
  rowData: any[];
}

export class FirstAgGridSample extends PureComponent<{}, FirstAgGridSampleState> {
  state: FirstAgGridSampleState = {
    columnDefs: [{ headerName: 'Make', field: 'make' }, { headerName: 'Model', field: 'model' }, { headerName: 'Price', field: 'price' }],
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }],
  };

  render(): ReactNode {
    const { columnDefs, rowData } = this.state;

    return (
      <div className="ag-theme-balham" style={{ height: '500px', width: '600px' }}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    );
  }
}
