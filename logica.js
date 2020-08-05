let counter = document.querySelector('.counter');
let lowerCountBtn = document.querySelector('#lowerCountBtn');
let addCountBtn = document.querySelector('#addCountBtn');
let resetCountBtn = document.querySelector('#resetCountBtn');


lowerCountBtn.addEventListener('click',lowerBtn);

addCountBtn.addEventListener('click',addBtn);

resetCountBtn.addEventListener('click',resetBtn);

function lowerBtn(){

	
	counter.innerHTML--;

	if(counter.innerHTML > 0){
	counter.style.color = 'green';
		} else if(counter.innerHTML < 0) {
	counter.style.color = 'red';
		} else{ counter.style.color = 'black';

	}

	counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});

}

function addBtn(){

	counter.innerHTML++;

		if(counter.innerHTML > 0){
	counter.style.color = 'green';
		} else if(counter.innerHTML < 0) {
	counter.style.color = 'red';
		} else{ counter.style.color = 'black';

		}

		counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});

		
}

function resetBtn(){
	counter.innerHTML = 0;
	counter.style.color = 'black';
	counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

