console.log('1');
clean(true);
function clean(repeat)
{
	$('#related').remove();
	$('#compainion').remove();
	$('#secondary').remove();
	if (repeat)
	{
		setTimeout(clean(false),1000);
	}
}
