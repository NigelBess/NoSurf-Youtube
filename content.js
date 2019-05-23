console.log('1');
clean(true);
function clean(repeat)
{
	$("#related").remove();
	if (repeat)
	{
		setTimeout(clean(false),1000);
	}
}
