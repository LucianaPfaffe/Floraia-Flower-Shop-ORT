'use strict';

$(document).ready(function() {
    
    function armarCarrito() {
        let $catalogo = $('#catalogo'); // Asumiendo que catalogo es el ID del elemento

        for (let i = 0; i < productos.length; i++) {
            let $producto = productos[i];
            let $productoHTML = '<div class=" col-12 col-md-4 col-sm-6 py-4">' +
                '<div class="sc-product-item">' + 
                    '<img class="img-fluid" data-name="product_image" src="' + $producto.Imagen + '">' +
                    '<h3 data-name="product_name">' + $producto.Nombre + '</h3>' +
                    '<p data-name="product_desc">' + $producto.Descripcion + '</p>' +
                    '<input name="product_price" value="' + $producto.Precio + '" type="hidden" />' +
                    '<input name="product_id" value="' + $producto.ID + '" type="hidden" />' +
                    '<p>$' + $producto.Precio + '</p>' +
                    '<button class="sc-add-to-cart btn btn-success">' +
                '<i class="bx bx-shopping-bag"></i> Agregar' +
            '</button>' +
                '</div>' +
            '</div>';    
    
            $catalogo.append($productoHTML);
            
        }

        
    }
    
    
    armarCarrito();
    $('#smartcart').smartCart();


//carusel con valoraciones
    
});

$(document).ready(function(){
    $('.valoraciones-carrusel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});
 

$(document).ready(function() {
    var texto = "Descubre el encanto de nuestras flores y transforma tus mejores momentos en inolvidables.";

    function mostrarCaracteres(index) {
      if (index < texto.length) {
        $(".maquina-escribir").append(texto[index]);
        setTimeout(function() {
          mostrarCaracteres(index + 1);
        }, 70); // Ajusta el tiempo de espera según tus preferencias
      }
    }

    mostrarCaracteres(0);
  });

 

 
  






