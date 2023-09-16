
import exportExcel from '../services/export-excel.js';
import {exportCsv} from '../services/export-csv.js';

export async function exportTodo (httpService, format) {

  if(format.excel) {
    await exportExcel(httpService)
  }
  else if(format.csv) {
    console.log('exporting csv')
    await exportCsv(httpService)
  }
  else {
     console.log('A format not available')
  }




}
