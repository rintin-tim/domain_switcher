# domain_toggle

Switch between identical URL paths on two different domains without manually and repetitively changing the URL in the browser.
This can be useful for comparing webpages across production and staging environments, or comparing pages across different regions.

For example: 
test.com
live.com

| Current page | After toggle |
| ------------ | -------- |
| <strong>https://<span></span>test.com</strong><em>/yellow-rubber-ducks</em>|<strong>https://<span></span>live.com</strong><em>/yellow-rubber-ducks</em>|

### Instructions

1. Update the script to include the two domains to toggle:

    `const domainA = 'https://www.amazon.co.uk';`

    `const domainB = 'https://www.amazon.com';`

2. To run the script in your browser window, go to (`Developer Tools` (`F12`) > `Console` > Then `Copy` & `Paste` the edited script into the console > Press `Enter`) 
3. To switch between domains when testing, re-run the script in the browser console (if Chrome, go to: `Developer Tools` (`F12`)> `Cursor Up` (&#8593;) > `Enter`)
4. The new domain opens in a new window - the original url remains open for comparison
