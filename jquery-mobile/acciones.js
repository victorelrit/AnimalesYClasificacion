// JavaScript Document
 $(document).ready(function(e) {
    $('tablero').height($('page').height()); // calcular el alto de la pantalla del dapositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido 
		audio.window.plugins.LowLatencyAudio;
		audio.preloadFX('gorila','audio/gorila.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','audio/cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hipopotamo','audio/hipopotamo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','audio/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallo','audio/gallo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cabra','audio/cabra.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cerdito','audio/cerdito.mp3',function(){},function(e){alert('Error '+e);});
				//reproducir el sonido de los animales
		$('Contenedor').bind('touchstart', function(){$(this).addclass('tocada');
audio.play($(this).attr('id'));});
        $('Contenedor').bind('touchend', function(){$(this).removeclass('tocada');});
		
	},false);//deviceready
});//ready// JavaScript Document