function out(){
	var p;
	p = document.getElementById('out');
	//p.innerHTML += ' <b>НЕ ХОЧЕШЬ</b>'
	//p.insertAdjacentHTML('beforeBegin',' <b>HE ХОЧЕШЬ!</b>');
	//p.insertAdjacentHTML('afterBegin',' <b>HE ХОЧЕШЬ!</b>');
	//p.insertAdjacentHTML('beforeEnd',' <b>HE ХОЧЕШЬ!</b>');
	//p.insertAdjacentHTML('afterEnd',' <b>HE ХОЧЕШЬ!</b>');
	p.outerHTML = '<div class="one">НЕ ХОЧЕШЬ</div>'
}