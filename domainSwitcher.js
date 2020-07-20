var domainA = 'https://www.amazon.co.uk';
var domainB = 'https://www.amazon.com';

function domainSwitcher () {

	currentDomain = window.location.origin;
	currentPath = window.location.pathname;
	console.log('current domain: ' + currentDomain)
	console.log('current path: ' + currentPath)

	if (currentDomain == domainA) {
		openNewWindow(domainB);
	} else if (currentDomain == domainB) {
		openNewWindow(domainA);
	} else {
		console.log('current domain ' + currentDomain + ' is not recognised by DomainSwitcher');
	}
}

function openNewWindow(newDomain) {
	newWindow = window.open(newDomain + currentPath);
}

domainSwitcher();
