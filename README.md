# job-track-website-assignment-4

Question No:01 => What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:    getElementById() returns a single HTML element based on its unique id. It returns only one element.

        getElementsByClassName() returns all elements that have the same class name. Its return type is an HTMLCollection (which is a live collection).

        querySelector() returns the first matching element based on a CSS selector (id, class, tag, etc.).

        querySelectorAll() returns all matching elements based on a CSS selector. It returns a NodeList.

============================================================================================================================

Question No:02 => How do you create and insert a new element into the DOM?

Ans:    Step-1: First of all I have to create a new element.

        step-2: Then I have to add content inside the new element.

        Step-3: Finally I have to insert into the DOM using appendChild('element');

        Example: 
        // Step 1: Create
            const newCard = document.createElement("div");

        // Step 2: Add content
            newCard.innerText = "This is a new card";

        // Step 3: Insert into DOM
            const section = document.getElementById("cards-section");
            section.appendChild(newCard);

================================================================================================================================


Question No:03 => What is Event Bubbling? And how does it work?

Ans:    Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that   event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree   until it gets to the root element.

==================================================================================================================================


Question No:04 => What is Event Delegation in JavaScript? Why is it useful?

Ans:   Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

With event delegation, you create fewer event listeners and perform similar events-based logic in one place. This makes it easier for you to add and remove elements without having to add new or remove existing event listeners.

=================================================================================================================================

Question No:05 =>  What is the difference between preventDefault() and stopPropagation() methods?

Ans:    PreventDefault() Stops the browser’s default behavior. 

        on the other hand, stopPropagation() Stops the event from bubbling (moving up) in the DOM.

