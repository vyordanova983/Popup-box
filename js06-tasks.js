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
