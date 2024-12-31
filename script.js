const table = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];
var i=3;
function insert_Row() {
	const newRow = table.insertRow(0);
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	cell1.textContent = `New Cell1`;
	cell2.textContent = `New Cell2`;
	i++;
}
const btn = document.getElementById('button');
btn.addEventListener('click', insert_Row);