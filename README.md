# schema-text-editor
Text editor challenge

● The structure of the underlying text should be a list of paragraphs - there should be
a `Document` component which would contain multiple `Paragraph` components.
Visually, the entire document should look and work like a bullet point list with each
paragraph functioning similar to a bullet point. The text of each paragraph should
be limited to 1000 chars.

● For styling, pressing Ctrl+B or Ctrl+I should make the entire current paragraph bold
or italic respectively.

● Pressing the ‘Enter’ key inside any paragraph should move the text that is to the
right of the cursor to a newly created paragraph which is inserted after the current
one. Pressing the ‘Enter’ key at the end of the paragraph will just make a new empty
one and move the cursor to that one.

● There should be three methods for adding listeners which would be called when the
following actions happen: create a new paragraph, remove a paragraph or update
the text of an paragraph. The listeners should be called with appropriate parameters
e.g. for the update action the parameters would be the paragraph identifier and
updated text.
● There is no need for persistent memory, the web app can display an empty
document with one empty paragraph on ‘Refresh’.
