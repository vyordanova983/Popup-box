document.body.addEventListener("click", hadleClick);

const map = {
	openPopup: openPopup,
	closePopup: closePopup, // обект, който пази функциите, които искаме да се изпълняват
	//addInput: addInput,
}
function hadleClick(event){
	//console.log(event.target.id);
	if(typeof map[event.target.id] === 'function'){//проверява в map обекта дали map[event.target.id]  (openPopup:) е function. 
												//В случая е openPopup(event){} и изпълнява функцията
		map[event.target.id](event);
	}
}


function openPopup(event){
	let showBox = document.querySelector(".popupBox");
	showBox.classList.add("show");
}
function closePopup(event){
	let showBox = document.querySelector(".popupBox");
	showBox.classList.remove("show");
}

//////////////////////////////////////////////////////////////////

function selectOpt() {
	let select = document.getElementById("selectInput");
	let option = select.options[select.selectedIndex].text;
	
	for (let i = 0; i < option.length; i++) {
		console.log(option);
	}
}
selectOpt();
function addInput() {
	
	let select = document.getElementById("selectInput");
	let option = select.options[select.selectedIndex];//.text;
	// let del = document.createElement('a');
	// let li = 0;
	

	// if(document.getElementById("inputText") && input)
	// {
	// 	li = document.createElement('li');
	// 	li.appendChild(document.createTextNode(input));
	// 	ul.appendChild(li);

	// 	del.href = "#";
	// 	del.classList.add("deleteElement");
	// 	del.appendChild(document.createTextNode("[X]"));
	// 	li.appendChild(del);

	// 	document.getElementById("inputText").value = "";

	// 	deleteElement();
	// 	sortAplhabetically();
	// }
	// for (let i = 0; i < select.options.length; i++ ) {
 //        option = select.options[i];
 //        option.setAttribute('selected', 'selected');
 //        console.log(option);
 //    }
    
    // /return select.options.length;
	// /console.log(inputValue);
}
addInput();