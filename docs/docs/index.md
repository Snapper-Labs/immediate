# Overview

Immediate is an architecture and a set of libraries for building rich, reactive
user interfaces. Using Immediate, developers can build interactive websites that
run entirely on the server-side, allowing them to use the familiar languages,
tooling, and frameworks they use for other backend tasks. No JavaScript is
needed.

Immediate was created to be the simplest and most productive way to build
**internal tools**, and that use case guides many of the design decisions.

Major features include:

- Reactive UIs as functions of state: structure your user interfaces as a
  function of state, and immgo will ensure that the result is as you expect. No
  need to maintain references to UI widgets and manually ensure state is
  synchronized.

- Encapsulation of UI components: Build re-usable building blocks that encapsulate
  their state and logic, and compose them to build more complex interfaces.

- Function-based, immediate-mode API: Rendering is done by calling a
  function rather than returning the desired elements. "Components" are also
  just normal functions, with internal state and lifecycle events also expressed
  as functions. Exposed state can be returned via return values, rather than
  relying on callbacks.

- Server-side application support: Implement interactive applications running
  entirely on the server, in your language of choice, avoiding the need to stand
  up an API boundary.

- A library of high-quality widgets for internal tools: Quickly build simple
  tools using our high-level widgets, while retaining the flexibility to
  customize your application when needed.
