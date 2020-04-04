	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('dn');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter matches
		if (dynamicContent == 'sucky') {
			$('#sucky').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'toadstool') {
			$('#toadstool').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'corpweb') {
			$('#corpweb').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'vnx') {
			$('#vnx').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'schoolteacher') {
			$('#schoolteacher').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cuckoo') {
			$('#cuckoo').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'ntranet') {
			$('#ntranet').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jpud') {
			$('#jpud').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'nomed') {
			$('#nomed').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'wack') {
			$('#wack').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'breadman') {
			$('#breadman').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hacienda') {
			$('#hacienda').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'parkette') {
			$('#parkette').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'infosci') {
			$('#infosci').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cancion') {
			$('#cancion').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'severities') {
			$('#severities').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'archmage') {
			$('#archmage').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flamborough') {
			$('#flamborough').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'federalbuilding') {
			$('#federalbuilding').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tekwolf') {
			$('#tekwolf').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'needy') {
			$('#needy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'energyspeak') {
			$('#energyspeak').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == '9inch') {
			$('#9inch').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wizards-workshop') {
			$('#wizards-workshop').show();
		} 
		// Check if the URL parameter matches
		if (dynamicContent == 'polarvortex') {
			$('#polarvortex').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'archangel') {
			$('#archangel').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'kamikaze') {
			$('#kamikaze').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'smoky') {
			$('#smoky').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
