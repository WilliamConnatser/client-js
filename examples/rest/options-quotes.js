import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v3_quotes__optionsticker
	rest.options.quotes("O:SPY241220P00720000").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});