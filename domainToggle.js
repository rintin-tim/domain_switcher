"use strict";

const domainA = "https://www.amazon.co.uk"; // replace this with primary domain
const domainB = "https://www.amazon.com"; // replace this with secondary domain

const currentDomain = window.location.origin;
const currentPath = window.location.pathname;

function domainToggle() {
  console.log(`Path: ${currentPath}`);
  console.log(`Current Domain: ${currentDomain}`);

  if (currentDomain == domainA) {
    openNewWindow(domainB);
  } else if (currentDomain == domainB) {
    openNewWindow(domainA);
  } else {
    console.log(
      `Current domain "${currentDomain}" is not recognised by DomainToggle`
    );
  }
}

function openNewWindow(newDomain) {
  console.log(`Updated to Domain: ${newDomain}`);
  window.open(newDomain + currentPath);
}

domainToggle();
