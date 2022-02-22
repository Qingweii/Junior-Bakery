# Junior's Bakery
Our project name is called the 'Junior's Bakery' and this will be the website for our first Integrated Project. The aim for this website is to create a simple and clean bakery website that communicates well with customers, with easy navigation flow that supports Ecommerce functionality.


# Link to website
https://qingweii.github.io/Junior-Bakery/


# Design Process
References were made from other bakery websites to find out the main features that needs to be implemented in the website. Wireframed was designed and prototype in Adobe XD. Finally, the Finalized Design for this website will be simple and clean so that users get clearer navigation across the pages, and the designs from XD prototype were imported to here to match the overall IP Project.


# Features
# Existing Features
- Login page: Allow users to fill up their name and email address with a minimum length of '3' and their password with a minimum length of '5' before entering the website.

- Loading page: Loading page will appear for a few seconds before displaying the home page, followed by a pop up message that will state the newly launched product to advertise them. Users can click on the 'View Product' or remove the pop up message, depending on their choice. This Pop up message only appears on the Home page.

- Navigation bar: The star icon on the upper left corner shows the user's point, they can also toggle between the star icon and a popup message will remind them that it is their points. The shopping cart icon on the upper right corners will display a page about their 'add to cart' orders after clicking it. Users have to click on the list of labels ('about us', 'shop'.....) to navigate across the pages.

- Home page: Introducing our Bakery shop with existing images and descriptions

- Footer section: All the footer section will have a small interaction where user can enter their Birthday date so that they get special discount with their birthday orders. Additionally, they get to find us on Social Media Platforms and links to access across the website as well.

- Shop page ('Our Signatures'): Users get to view our bakery products under Our Signatures and when they hover over the product images, the images changes to different angles and they get a 'Quick View' button that will display a page that shows short description about that product after clicking it and they can even place their orders on that Quick View page.
To view more detailed information of that product, they can click on the 'More information' button.

- Shop page ('Coming Soon'): Users can get a sneak peek of our bakery products that are coming soon.

- Shop page ('Reviews & Testimonials'): Reviews gathered from our customers will be displayed on our Shop page to give new customers a general understanding of our products. The Reviews will be an automatic slideshow that will change every 3 seconds.

- View product page: Users get to look at the selected product closer using the carousel and they are able to choose the quantity they want and add to cart. They can also choose the size of the product (6-inch or 10-inch ...) depending on the product and the price will change together as well.

- Shopping cart page: Users will have to add products into their cart before checking out, otherwise, a notification will inform them that their cart is empty and would not be able to checkout. After placing their orders to the shopping cart page, the products that they have chosen will be shown on the cart to confirm their orders and they can also change the quantity and even remove items off their order list if they change their mind. The subtotal for all the items they have added will sync together when they change the quantity or remove items.

- Checkout section: After they have confirmed their orders, they can click on the Checkout button and a checkout section will appear below. They are required to fill in all the fields and choose their cards payment before paying. Cards Validation are also implemented. Even if they change the quantity from their order cart, the total on the checkout section will also change together. Shipping fees are also added in to the final cost. After they have successfully pay for all the items, the page will reload and all their orders on the shopping cart will be removed.

- Participate page ('Mini Quest'): Users are required to go down to our physical store if they want to play the Quest. After clicking the play button, a section will appear and a Timer will automatically runs. They will click on the 'generate' button to get a random pastry name and fill in the answer on what's the filling inside that pastry. The pastry names are randomly generated. They are only allowed to generate the pastry name and submit their answer ONCE. Upon submission, their points, on the upper left corner, will automatically increase by 50 points and it is stored in the local storage. Their time completed and the item they are finding will also be stated after their submission.

- Participate page ('Q&A session'): Users can also take part in the Q & A session where they interact with others. They can also vote on the Topic by clicking either the up arrow or down arrow on the left side and share their comment as well. When they share their comment, their comment will appear on that chat, and they are awarded 30 points. They can also share the topic to others or save that topic by clicking on the icons below the textbox. When they share to others, they will click onto the 'copy link' button and it will be copied to their clipboard. They can save that topic by toggling the bookmark icon.

- Contact page: Users can submit their queries through this page by entering their name, select the related topic they want to tell us about and message us. They have to fill in all these fields in order to submit. They also get to see our shop designs based on different outlets, imported from ArtSation. They can also join our team by clicking on the button and it will bring them to another website. Lastly, they get a Google Map of where our outlets are in Singapore, and have a glimpse of how our outlets looks like in real life. 


# Technologies used

- JQuery: to simplify DOM Manipulation and use it for multiple functions

- Ajax & API: to post, update, delete and get data for the Add to cart page

- JSON: to store multiple pastry names and randomly generate it 

- Local Storage: to store and update current points

- Bootstrap: for add to cart page format

- Lottie: for loading page


# Testing
1. Login page:
- Try and submit form but 404 error appears on GitHub link
- Try and submit form again but this time using 'get' method and it works but loading page keeps loading
- Try and submit form again but this time using 'action' to link to home.html and it works

2. Home page:
- Try to put image on the home page but did not appear at all
- Try to put image again but this time using position 'absolute' and it works

3. Footer section:
- Choose date input and enter but the page keeps refreshing
- Choose date input and this time added preventDefault but it did not work
- Choose date input and this time added return false to function and it works

4. Shopping cart page:
- Try to change the image upon hover but did not work
- Added hover function to CSS and it worked but has a sudden transition
- Added transition to CSS and now it looks better

- Try to hover and button appears but it did not work
- Try to add function upon hover but its getting complicated and did not work
- Try to use '+' in CSS in order to show the images and the button but did not work
- Try to add '.' in CSS together with image hover and it worked

- Try to remove items off the list but it removes the data from RestDB but not immediately on the html page
- Added closest('tr').remove() and it worked

5. Add to cart page:
- Able to store the data to RestDB but did not appear on the cart page
- Try to use 'get' method but still did not appear on cart page
- Try to use another Javascript file and apply 'get' ajax method to it and it worked

- Try to think of ways to add/substract quantity after clicking on the '+'/'-' sign
- After countless tries, the number (quantity) worked whenever user click on the '+'/'-' sign
- When trying to change the quantity on cart page, it skips number like '3' to '5' after clicking '+' button, vise versa
- Try to adjust and use querySelector and it worked and even updates to RestDB


6. Checkout page:
- To sync the changes when they change quantity but did not worked
- Try to create a function to sync the changes but did not worked
- Realise that I have to do the caculation inside the $.ajax settings in order to sync the changes and it worked

- Try to remove all items upon clicking on the pay button but it removed only the first row
- Try to add function that goes through all the rows of orders (for var i = 0.....), and it worked upon refresh

7. Participate page ('Mini Quest'):
- Try to apply function where user get to click only once but did not worked
- Try to put 'this.onclick=null' onto the html page after the onclick function and it worked

- Try to display time completed by user but it shows an extra minute that is not supposed to be there
- Using 'Number(startingMinutes-1)' and it worked where it excluded the first minute

- Updating points upon submission of the Quest but it keeps updating every time it is clicked
- Realise that it has to put under the onclick function and before the 'return false' on the JS file to work

- Updating points to all pages using Local Storage but did not worked
- Realise that I have to give ID's to all the pages and apply function to the all Javascript files as well

- Wanted to toggle between the save icon but it only changes color after one click and could not change back
- Added toggelClass to it and it worked

8. Contact Page:
- Try to not refresh the page upon form submission but did not worked
- Found out that I have used the same ID's from other pages and after correcting, it worked


# Interesting facts learnt
- When I was adjusting Media Query, I found out that when I used style on the HTML page, I could not adjust the sizing on the CSS for media query, it will not change
- I found out that using the same ID on the same page will not worked and it only works for ID that is place first
- Using different DOM manipulation gives different results (especially querySelector and querySelectorAll) 
- Giving the body a class name and create functions in Javascript to link specific functions to that class name, works when there are unnecessary functions not required by a certain page when using same Javascript file across the pages (to minimize errors)


# Credits
# Content
- Some references for the text on the reviews were from websites 'Cats & the Fiddle' and 'Milkbar'


# Media
- The photos used in this site were obtained from Google photos.


# Acknowledgements
- Inspirations received for this website are websites from 'Cats & the Fiddle' and 'Milkbar'.

- Our individual contributions for this website will be stated on our own ICT Network drive.
