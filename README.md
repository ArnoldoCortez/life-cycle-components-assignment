# Life-cycle-components
1. When the App is mounted theres a fetch to an api asking for users information 
2. There are three buttons to change between monsters, when a card is mounted an scroll listener is initialized
3. When a monster is changed the card is dismounted and the listener is removed.
4. The App component should update if the index of the monster change or if the hasError state change.
5. If the app is updated then a transition in the card is shown.
6. There is a fourth button, if clicked an error is thrown, this erros is catched by the componentDidCatch, and a new page is rendered with the error message and a button to go back to the application.
