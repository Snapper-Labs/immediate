open questions:
- in `Row()`, the function-based API, or the open/close based API?
- ^ interesting example of event-based vs immediate, see FlightBooker, where
  logic is wrapped in Col().
- Changed() api vs event-based?
- returning the state from the DOM (vs event-based) has the issue of having to
  know initial state. but that should be fine. but think about, like, changes vs
  initial...
- styling needs to be improved
