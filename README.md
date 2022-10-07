# domain_toggle

Switch between identical URL paths on two different domains without manually and repetitively changing the URL in the browser.
This can be useful for comparing webpages across production and staging environments, or comparing pages across different regions.

For example: 

| Current page | After toggle |
| ------------ | -------- |
| <strong>https://<span></span>test.com</strong><em>/yellow-rubber-ducks</em>|<strong>https://<span></span>live.com</strong><em>/yellow-rubber-ducks</em>|

### Instructions

1. Update the script to include the two domains to toggle:

`var domainA = 'https://www.amazon.co.uk';`

`var domainB = 'https://www.amazon.com';`

2. Run the script in your browser window (if Chrome, go to: `Developer Tools` (`F12`) > `Console` > `Copy` & `Paste` the edited script into the console > Press `Enter`) 
3. To switch between domains when testing, rerun the script in the browser console (if Chrome, go to: `Developer Tools` (`F12`)> `Cursor Up` (&#8593;) > `Enter`)
4. New domain opens in a new window - the original remains open for comparison
