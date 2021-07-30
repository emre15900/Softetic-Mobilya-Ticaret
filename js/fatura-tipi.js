/* Fatura Tipi */

function faturatipi(){
    var fatura = document.getElementById('fatura-tipi');
    if(fatura.selectedIndex==0){
        document.getElementById('bireysel-fatura').style.display = 'block';
    }
    else{
        document.getElementById('bireysel-fatura').style.display = 'none';
    }
    if(fatura.selectedIndex==1){
        document.getElementById('kurumsal-fatura').style.display = 'block';
    }
    else{
        document.getElementById('kurumsal-fatura').style.display = 'none';
    }
}