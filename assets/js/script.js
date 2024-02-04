// Función para ejecutar smooth scrolling en Navbar
$(function () {
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 500);
        }
    });
});

//Función en tarjetas para aparecer y desaparecer
$(".tarjetas").click(function () {
	$(".contenido").toggle(1000);
	$('.contenido').show(1000);
});