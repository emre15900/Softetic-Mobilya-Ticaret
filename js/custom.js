    /* Onaylama Bildirimi Sweet Alert */

    $('.sepet').click(function(){

      Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: 'Ürününüz Sepete Eklendi!',
      showConfirmButton: false,
      timer: 1500
      })

      });

      $('.favori').click(function(){

      Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: 'Ürününüz Favorilere Eklendi!',
      showConfirmButton: false,
      timer: 1500
      })

      });