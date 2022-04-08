var altura = 0
var largura = 0
var vidas = 1
var tempo = 20 
var nivel = window.location.search 
nivel = nivel.replace('?', '')
var criaMoscaTempo = 1500

if(nivel === 'normal'){
	criaMoscaTempo = 1500
	tempo = 20 
}
else if(nivel === 'dificil'){
	criaMoscaTempo = 1000
	tempo = 15
}
else if(nivel === 'chucknorris'){
	criaMoscaTempo = 750
	tempo = 10
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0 ){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML  = tempo
	}
}, 1000)


function posicaoRandomica(){

	//remover mosquito anterio (caso exista)
	if (document.getElementById('mosca')){
		document.getElementById('mosca').remove()
		if (vidas >= 3){
			window.location.href = 'fim_de_jogo.html'
		}
		else{
			document.getElementById('v' + vidas).src='img/coracao_vazio.png'
			vidas++
		}
	}
	
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar elemento html 
	var mosca = document.createElement('img')
	mosca.src = 'img/mosca.png'
	mosca.className = tamanhoAleatorio() + " " + ladoAleatoria()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0: 
			return 'mosquito1'
		case 1:
		 	return 'mosquito2'
		case 2: 	
			return 'mosquito3'
	}
}

function ladoAleatoria(){

	var classe = Math.floor(Math.random() * 2)
	switch(classe){
		case 0: 
			return 'ladoA'
		case 1:
		 	return 'ladoB'
	}
}