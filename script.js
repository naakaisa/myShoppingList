/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// add Row
  function addHtmlTableRow()
  {
    // get the table by id
    // create a new row and cells
    // get value from input text 
  
    var table = document.getElementById("table");
    newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell (0),
        cell2 = newRow.insertCell (1),
        itemName = document.getElementById("itemName").value,
        qty = document.getElementById("qty").value;

    cell1.innerHTML = itemName;
    cell2.innerHTML = qty;
    
    selectedRowToInput();
  }
  
function selectedRowToInput()
{   var rIndex,table = document.getElementById("table");
    for(var i = i; i < table.rows.length; i++)
    {
         table.rows[i].onclick = function()
         {
             rIndex = this.rowIndex;
             document.getElementById("itemName").value = this.cells[0].innerHTML;
             document.getElementById("qty").value = this.cells[1].innerHTML;
         };
    }
  }
selectedRowToInput();

function editHtmlTableSelectedRow()
{   var rIndex,table = document.getElementById("table");
    var itemName = document.getElementById("itemName").value,
        qty = document.getElementById("qty").value;

    table.rows[rIndex].cells[0].innerHTML = itemName;
    table.rows[rIndex].cells[1].innerHTML = qty;
}
  
  
function removeSelectedRow()
{
    var rIndex,table = document.getElementById("table");
    table.deleteRow(rIndex);
    
    document.getElementById("itemName").value = "";
    document.getElementById("qty").value = "";
}
  

