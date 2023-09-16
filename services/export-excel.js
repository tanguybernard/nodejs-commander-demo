import  excelJS from "exceljs";
const exportExcel = async (httpService) => {

  const workbook = new excelJS.Workbook();  // Create a new workbook
  const worksheetInProgress = workbook.addWorksheet("TodoInProgress"); // New Worksheet
  const worksheetDone = workbook.addWorksheet("TodoDone"); // New Worksheet
  // Column for data in excel. key must match data key
  worksheetInProgress.columns = [
    { header: "S no.", key: "s_no", width: 10 },
    { header: "Task", key: "task", width: 10 }
  ];

  worksheetDone.columns = [
    { header: "S no.", key: "s_no", width: 10 },
    { header: "Task", key: "task", width: 10 }
  ];

  //

  const todoList = httpService.getTodoList();
  let counterDone = 1;
  let counterInProgress = 1;
  if (todoList && todoList.length) {
    // Looping through Todolist
    todoList.forEach((
      task) => {
      if (task.done) {

        worksheetDone.addRow({s_no: counterDone, task: task.text}); // Add data in worksheet
        counterDone++;

      } else {
        worksheetInProgress.addRow({s_no: counterInProgress, task: task.text}); // Add data in worksheet
        counterInProgress++;
      }
    })
  }


  try {
    await workbook.xlsx.writeFile(`todolist-exported.xlsx`)
      .then(() => {
        console.log("saved")
      });
  } catch (err) {
    console.log(err);
    console.log("An error occurred")

  }
};

export default exportExcel;
