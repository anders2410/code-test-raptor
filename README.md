## Code Test Raptor
### Initial thoughts and challenges
I thought about using Vue.js for this test, but came to the conclusion that it made more
sense to use a framework I was already familiar with. However, I have used MUI (Material UI for React)
for the first time, as I think it resembles Vuetify and wanted to try and use it. 

This has been quite interesting but also challenging to figure out a new way of doing things
for this test, but in the end it makes designing a simple website much easier.

### Data management
I thought about using Redux for state management, but because I haven't really used it
before, it thought it would give too much overhead for this test.

Instead, I went with the simple solution; to handle the state in `<App />`. Preferably, I would
load data from the backend, and when editing/creating new data I would save it to the backend,
and then retrieve it again. Making the backend responsible for handling all data.

### How to run
First do a `npm install` and then `npm run dev`.
