# domain_toggle

Toggle between the same url ‘slug' on two different domains - without manually (and repetitively) changing the URL in the browser. Running the script in your browser checks the current domain and opens the same slug for the alternate domain. 

For example: 
* Current page: <strong>https://<span></span>test.com</strong><em>/yellow-rubber-ducks</em>
* New page: <strong>https://<span></span>live.com</strong><em>/yellow-rubber-ducks</em>

To use: 
1. Update the script to include the two domains to toggle:

`var domainA = 'https://www.amazon.co.uk';`

`var domainB = 'https://www.amazon.com';`

2. Run the script in your browser window (if Chrome, go to: `Developer Tools` (`F12`) > `Console` > `Copy` & `Paste` the edited script into the console > Press `Enter`) 
3. To switch between domains when testing, rerun the script in the browser console (if Chrome, go to: `Developer Tools` (`F12`)> `Cursor Up` (&#8593;) > `Enter`)
4. New domain opens in a new window - the original remains open for comparison
