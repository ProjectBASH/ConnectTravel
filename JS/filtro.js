$(document).ready(function(){
    $('.seleccion').hide();
    $('.fila').hide();

    //Agregar clase ct_item-active
    $('.charge').click(function(){
        //Agregar la clase al enlace seleccionado
        var selectedOption = $('.set-category').find('option:selected');
        var catProduct = selectedOption.attr('category');
        //Ocultar Productos
        function hideProductos(){
            $('.seleccion').hide();
            $('.fila').hide();
        }setTimeout(hideProductos, 400);

        //Mostrar Productos
        function showProductos(){
            $('.fila[category="'+catProduct+'"]').show();
            $('.container-items').css('width', '100%');
            $('.seleccion').css('width', '0%');
            $('.seleccion').css('opacity', '0');
            $('.seleccion').show();
            $('.fila[category="'+catProduct+'"]').addClass('first');
        }setTimeout(showProductos, 400);

    });
});