$(function(){
	$('#vat').hide();
	$('#expected').hide();
	var price;
	var vat;
	var totprice;
	
	$('#calculate').submit(function(event){
		event.preventDefault();
		$('#vat').show();
		$('#expected').show();
		$('#totvat').html(vat.toString());
		$('#finalprice').html(totprice.toString());
  });
  
	$('#VatA').click(function(event){
		price = $('#price').val();
		vat = (price * (0/100)).toFixed(2);
		totprice = parseFloat(price, 10) + parseFloat(vat, 10);
	});
	
	$('#VatB').click(function(event){
		price = $('#price').val();
		vat = (price * (13/100)).toFixed(2);
		totprice = parseFloat(price, 10) + parseFloat(vat, 10);
	});
	
	$('#VatC').click(function(event){
		price = $('#price').val();
		vat = (price * (23/100)).toFixed(2);
		totprice = parseFloat(price, 10) + parseFloat(vat, 10);
	});
});