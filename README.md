* DGMD 20, Project 4
* Kate de Bethune
* December 2, 2015

# Part 1: jQuery Mobile (67% of grade)

* Create a 2-3 page website using jQuery Mobile. Use the jQuery Mobile definition of "page" for the page count, not the number of HTML documents.

1. Create the site using jQuery Mobile pages or dialogs.  (Hint: this means there will be one single HTML page, but the navigation will make it seem like 2-3 pages.)
		DONE: three page cello pedagogy website built using the jQuery format


2. Use the grid system and make something responsive with custom code (not the built-in breakpoint). Use at least one breakpoint, as defined in a media query. (You may code more if you wish.) This must be applied to at least one of the pages on your site.
	Done: Suzuki page uses ui-grid-a for a 2 col layout; ui-block-a and ui-block-b are used to divide content into two columns; a media query is used at the breakpoint of 720 px to make the two columns of content stack using width: 100%.

3. Include at least one button or icon (or both).
	Done: button included, also tried icon, but image not appearing.

4. From the jQuery Mobile demo page (http://demos.jquerymobile.com/1.4.5/), make use of at least 2 items that end in “widget”. Example: listview widget, navbar widget, popup widget, etc. Not all of these were covered in class. You should be able to read the docs and implement these.
	DONE: Pop up and listview implemented on index.html

5. Create a custom theme for your site using ThemeRoller and make use of it in your site. (You can apply the theme to the whole page or a few elements on your page – your pick.) You should have at least one main theme (i.e. a "c" theme), but if you want to add additional styling elements to more themes (like a "d" or "e" theme), you are welcome to do so. DONE: a "c" theme is applied to every page.

6. Create a form for your site that contains at least 4 distinct field types. (Example: a group of radio buttons, a text field, a select list, etc.) The form does not have to submit. Use proper HTML5 coding and field types for creating the form, as covered in previous lectures. For at least two of the field types, include a jQuery Mobile modification, as demonstrated in the lecture (horizontal display, mini version, etc) or some other modification you find in the documentation.
	DONE: #form area of page. The following controls are used: TEXT INPUT, RADIO BUTTON HORIZ, RADIO BUTTON VERT,SLIDER, CHECKBOX

7. Apply at least two of the jQuery Mobile touch events to your page(s) to make something happen. jQuery Mobile events are listed at http://api.jquerymobile.com/category/events/ (Links to an external site.) Some were covered in lecture, and you may use these, or you may use other events listed in the docs.
	DONE: swipeleft, swiperight, taphold, vertical & horizontal orientation changes all implemented using lorempixel placeholder images. 

#Part 2: jQuery UI (33% of grade) -- added November 30

* Create a separate document or documents using jQuery UI and demonstrating the requirements below. This can be part of your jQuery Mobile site, or it can stand alone as a separate URL.

- You may combine jQuery Mobile and jQuery UI on the same page. However, as noted in the lecture, this may be buggy, so it is recommended that you have a separate jQuery UI document(s) demonstrating the below features.

- You do not have to create a custom jQuery UI download. You may use the default with all of the options.

- Create a custom jQuery UI ThemeRoller theme. This may compliment the jQuery Mobile theme, or it may be totally different.

- Include in the page(s) the following. Interaction/widget/effect groups are taken from the jQuery UI website:
- ONE INTERACTION: Draggable, droppable, resizeable, selectable, sortable. You may use more than one interaction in your site.
	DONE: draggable
- ONE WIDGET. You may NOT use: Buttons (and other form elements listed under Buttons), Datepicker, Tooltip. You may use more than one widget in your site.
	DONE: Tabs
- ONE EFFECT. You may NOT use: Add class, remove class, show, hide. I recommend investigating Toggle but you may choose any of the other remaining effects. You may use more than one effect in your site.
	DONE: toggle
- FOR EACH INTERACTION/WIDGET/EFFECT: you will create something new, not demonstrated on the demo page. I want you to do what I did in the video. Using the tooltip, I combined "custom animation" with "track the mouse". It looked ugly, but it was not code that I copied and pasted in whole from the website either. I am looking for a demonstration of understanding that you can read the documentation and write good quality jQuery to form your own interactions/widgets/effects on your site. You should combine at least two aspects in each example. You are welcome to combine more.
NO CREDIT GIVEN FOR: Copying/pasting the examples into your work without manipulation, or with only CSS manipulation. Watching the lynda.com videos and using their examples in your homework.

How to Turn In Your Assignment
Turn your assignment in at the assignment page in Canvas. 

Use the commenting feature for your assignment, or create a text file.

In the text file/comment, please complete the following:

* My week 12-13 jQuery Mobile assignment is located at this/these URL(s): http://dgmd_p4.kdeb-csci-e15.me/
1. Grid system is located on this/these page(s): http://dgmd_p4.kdeb-csci-e15.me/#suzuki lines 71 - 91, media query is here: styles.css lines 1 - 9.

2. Button and/or icon is located here: http://dgmd_p4.kdeb-csci-e15.me/#suzuki lines 80 - 81

3. My two widgets are: LISTVIEW and POPUP/TOOLTIP and they are located on these pages: http://dgmd_p4.kdeb-csci-e15.me/ lines 37 & 43 

4. My custom theme is applied on this page: /index.html, line number 8.

5. The form is located here: http://dgmd_p4.kdeb-csci-e15.me/#form and the mobile modifications I used are RADIO BUTTON HORIZONTAL and SLIDER HTML line numbers: line 147 & 178

6. The jQuery Mobile events I used on my site include: swipeleft, swiperight, taphold, vertical & horizontal orientation changes all implemented using lorempixel placeholder images. They are located here: http://dgmd_p4.kdeb-csci-e15.me/#suzuki line 78, also css: styles.css lines 19 - 48

7. My week 14 jQuery UI assignment is located at this/these URL(s): http://dgmd_p4.kdeb-csci-e15.me/jquery_ui/index.html

8. My custom theme is applied on this page http://dgmd_p4.kdeb-csci-e15.me/jquery_ui/index.html line number(s): 9. 

9. My interaction is: DRAGGABLE applied on this page http://dgmd_p4.kdeb-csci-e15.me/jquery_ui/index.html line number(s) HTML: line 55, JS: line 33.

10. My widget is TABS applied on this page http://dgmd_p4.kdeb-csci-e15.me/jquery_ui/index.html line number(s) HTML: lines 48 - 77 JS: line 34

11. My effect is TOGGLE applied on this page http://dgmd_p4.kdeb-csci-e15.me/jquery_ui/index.html line number(s) HTML: line 56 JS: lines 36 - 40


- URL specified above means the EXACT URL where this is located. Do not give me the home page URL unless that’s where the effect is located. Provide the URL to the about page if that’s where the effect is located.
