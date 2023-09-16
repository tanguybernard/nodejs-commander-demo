
import exportExcel from '../services/export-excel.js';

export async function exportTodo (httpService) {


  await exportExcel(httpService)


}
