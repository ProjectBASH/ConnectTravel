const btnCart = document.querySelector('.travel-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

$(document).click(function(event) {
    // Verificar si el clic ocurrió fuera de .travel-icon y .container-cart-products
    if (!$(event.target).closest('.travel-icon').length && !$(event.target).closest('.container-cart-products').length && !$(event.target).closest('.icon-close').length) {
        // Verificar si .container-cart-products no tiene la clase 'hidden-cart'
        if (!$('.container-cart-products').hasClass('hidden-cart')) {
            // Agregar la clase 'hidden-cart'
            $('.container-cart-products').addClass('hidden-cart');
        }
    }
});



/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const itemSeleccion = document.querySelector('.seleccion');

// Variable de arreglos de Productos
let allItems = [];

const valorTotal = document.querySelector('.total-pagar');
const totalV = 0;

const countProducts = document.querySelector('#contador-items');

const cartTotal = document.querySelector('.cart-total');

itemSeleccion.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const btn_parent = $('.btn-add-cart').parent().parent().html();
		const tempElement = $('<div>').html(btn_parent);

		const infoItem = {
			quantity: 1,
			title: tempElement.find('h2').text(),
			price: tempElement.find('span').text(),
		};

		const exits = allItems.some(
			item => item.title === infoItem.title
		);

		if (exits) {
			const items = allItems.map(item => {
				if (item.title === infoItem.title) {
					item.quantity++;
					return item;
				} else {
					return item;
				}
			});
			allItems = [...items];
		} else {
			allItems = [...allItems, infoItem];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const item = e.target.parentElement;
		const title = item.querySelector('p').textContent;

		allItems = allItems.filter(
			item => item.title !== title
		);
		showHTML();
		
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allItems.forEach(item => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');
		$('.contain-btn-i').removeClass('hidden-cart');
		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${item.quantity}</span>
                <p class="titulo-producto-carrito">${item.title}</p>
                <span class="precio-producto-carrito">${item.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;
		rowProduct.append(containerProduct);
		total = total + parseInt(item.quantity * item.price.slice(1));
		totalOfProducts = totalOfProducts + item.quantity;
		totalV == total;
	});
	valorTotal.innerText = `L${total}.00`;
	countProducts.innerText = totalOfProducts;
	if(total<1){
		$('.contain-btn-i').addClass('hidden-cart');
	}
};

$(document).ready(function() {
    // Función para generar el enlace de WhatsApp
    function generarEnlaceWhatsApp(numero, mensaje) {
        const mensajeCodificado = encodeURIComponent(mensaje);
        const enlace = `https://wa.me/${numero}?text=${mensajeCodificado}`;
        return enlace;
    }

    // Función para construir el mensaje de WhatsApp con la información proporcionada
    function construirMensajeWhatsApp() {
        const lugarSalida = $('#selectSalida').find('option:selected').text();
        const lugarDestino = $('#selectDestino').find('option:selected').text();
        const diaSalida = $('#fechaSalida').val();
        const diaRegreso = $('#fechaRegreso').val();
		var texto = $('.total-pagar').text();
        const total = parseInt(texto.substring(1)); // Reemplaza esto con tu variable total

        let mensaje = '¡Hola! armé este viaje desde la página web. Me gustaría una cotización especializada.\n';
        mensaje += `El viaje sería de ${diaSalida} hasta ${diaRegreso} saliendo desde ${lugarSalida} para llegar a ${lugarDestino}, incluyendo lo siguiente:\n\n`;

        allItems.forEach(item => {
            mensaje += `${item.quantity} ${item.title} ${item.price}\n`;
        });

        mensaje += `\nCon un total de $${total}`;
        return mensaje;
    }

    // Evento de clic para el botón
    $('#btn_send').click(function() {
        const numeroTelefono = '+50494973332'; // Reemplaza con el número de teléfono al que quieras enviar el mensaje
        const mensaje = construirMensajeWhatsApp();
        const enlaceWhatsApp = generarEnlaceWhatsApp(numeroTelefono, mensaje);
        
        // Abre el enlace de WhatsApp en una nueva pestaña
        window.open(enlaceWhatsApp, '_blank');
    });
});

