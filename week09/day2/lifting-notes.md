# Lifting State Up

## Why could you not just hold the state in TemperatureInput?

- You couldn't hold the state in TemperatureInput because the temperature value
  needs to be shared between two sibling components: TemperatureInput (for
  input) and TemperatureDisplay (for display). If the state was inside
  TemperatureInput, TemperatureDisplay wouldn't have access to it.

## What is the "lowest common ancestor" rule?

- The "lowest common ancestor" rule states that when multiple components need to
  share state, you should find the closest common parent component that is an
  ancestor to all of them, and lift the state up to that parent. This parent
  then passes the state down as props to its children.

## When does lifting state up become painful?

Lifting state up becomes painful when:

- The component hierarchy is very deep, requiring state to be passed through
  many intermediate components that don't actually use the state themselves
  (prop drilling)

# When Context is overkill

## What problem does Context solve that prop drilling does not?

- Context solves the problem of prop drilling

## When is prop drilling fine and Context unnecessary?

- Prop drilling is fine when the component hierarchy is shallow (2-3 levels
  deep). Adding context adds unnecessary complexity and makes the code harder to
  follow

## Why is "global state for everything" an anti-pattern?

- It creates unnecessary re-renders
- It makes debugging harder
- It breaks component encapsulation
- It complicates testing
