let defaultState = {
 title: 'Welcome to Redux! And more',
 todos: [
  {
   todo: 'Does it work?',
  },
 ],
};

export default function reducer(state = defaultState, action) {
 // state = defaultState -> if state doesn't exist then state equals 'defaltState', if state does exist it is just a state.
 return state;
}
