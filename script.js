var arr=[]
async function getapi() {
	document.getElementById("aa").style.display="block"
	document.getElementById("gg").style.display="none"
	const response = await fetch("https://jsonplaceholder.typicode.com/posts").then(res =>res.json()).catch((err) => console.log(err))
		arr=response		
		show(response);
		console.log(response)
}

function show(data) {
	arr.forEach(r => {
		let tab =
		`<tr>
		<th>Sr.no</th>
		<th>Group.no</th>
		<th>About</th>
		</tr>`;
		
		for (let r of data) {
			tab += `<tr>
			<td>${r.id} </td>
			<td>${r.userId}</td>
			<td>${r.title}</td>
			<td><button onclick="Editt(this)">Edit</button></td>
			<td><button onclick="Deletee(this)">Delete</button></td>		
			</tr>`;
		}
		document.getElementById("employees").innerHTML = tab;

	});

}

function Editt(td) {
	console.log(td,"sss	")
	let field=td.parentElement.parentElement;
	document.getElementById("employees").deleteRow(field.rowIndex)
	let id = field.firstChild.nextElementSibling.innerHTML 
	let grpi = field.firstChild.nextElementSibling.nextElementSibling.innerHTML
	let about = field.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML

	document.getElementById("idd").value=id
	document.getElementById("grp").value=grpi
	document.getElementById("abt").value=about


}

function Deletee(td) {
	let row=td.parentElement.parentElement;
	console.log(row)
	document.getElementById("employees").deleteRow(row.rowIndex)
}

function adds() {

	var ii=document.getElementById("idd").value
	var gg=document.getElementById("grp").value
	var ab=document.getElementById("abt").value
	var table = document.getElementById("employees");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.innerHTML = ii;
	cell2.innerHTML = gg;
	cell3.innerHTML = ab;
	cell4.innerHTML = `<td><button onclick="Editt(this)">Edit</button></td>`;
	cell5.innerHTML = `<td><button onclick="Deletee(this)">Delete</button></td>`;
}
// function adds() {
// 	var obj={}
// 	var ii=document.getElementById("idd").value
// 	var gg=document.getElementById("grp").value
// 	var ab=document.getElementById("abt").value
// 	Object.assign(obj,{id:ii,userId:gg,title:ab});
// 	arr.unshift(obj)
// 	console.log(arr)
// 	arr.forEach(r => {
// 		let tab =
// 		`<tr>
// 		<th>Sr.no</th>
// 		<th>Group.no</th>
// 		<th>About</th>
// 		</tr>`;
		
// 		for (let r of arr) {
// 			tab += `<tr>
// 			<td>${r.id} </td>
// 			<td>${r.userId}</td>
// 			<td>${r.title}</td>
// 			<td><button onclick="Editt()">Edit</button></td>
// 			<td><button onclick="Deletee(this)">Delete</button></td>		
// 			</tr>`;
// 		}
// 		document.getElementById("employees").innerHTML = tab;

// 	});
// }


