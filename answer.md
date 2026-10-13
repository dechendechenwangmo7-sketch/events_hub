Quick Check Q1:  You change the footer colour in styles.css. How many pages update? What if the same 
colour was only set with an inline style on index.html? 
Answer: When changes in styles.css: All pages linked to styles.css update automatically in 5 pages :index.html, events.html, register.html, gallery.html and contact.html. 
 When set with an inline style on index.html: only index.html updates.

Quick Check Q2:  Which is more specific: h1 or #welcome? If both set color, which wins? Write a one-line 
proof from your page. 
 
Answer: # welcome is more specific because ID selectors always beat element selectors.
 One-line proof from your page:
#welcome wins because its ID specificity (0,1,0,0) overrides the h1 element specificity (0,0,0,1), making #welcome {padding; 24px;} take precedence over standard tag styles.

Quick Check Q3:  Convert #0369a1 into an approximate rgb(...) value (you may use a colour picker). Why 
do designers often prefer hex in stylesheets?  
Answer: #0369a1 
:rgb(3, 105, 161)
Designers prefer hex codes because they are shorter, cleaner to read, and easier to copy-paste directly from design tools like figma or photoshop without taking up extra space in the stylesheet.
  
Quick Check Q4:  Set a nav link to display: none, then to visibility: hidden. What is the difference in the 
layout?   
  Answer:
layout?   
Answer: display: none – Removes the element completely. The space close up, and other items move in to take its spot.

Visibility: hidden- Makes the element invisible, but leaves an empty space where it was.
 

Quick Check Q5:  In your wireframe, how many event cards appear side-by-side at phone width? At 
desktop width?   
Answer:  Phone width: 1 card per row (stacked vertically for mobile readability)
Desktop width: 3 cards per row (side-by-side using Bootstrap grip columns like col – md-d)

Quick Check Q6:  Why must styles.css be linked AFTER the Bootstrap CSS file? What happens if you reverse 
the order and both set h1 colour?  
Answer: Stylesheets follow the cascade rule in css, which means when two styling reules have equal specificity, the one declared last in the document takes priority. Styles.css must be linked after the bootstrap CSS files so that your custom styles can successfully override Bootstrap loads second and overwrites your custom h1 color with its own default styles, making your custom changes invisble on the web pages.

