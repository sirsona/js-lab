# Decisions I owned

## Where did you place the temperature state and why?

- I place the temperature state in the `TemperaturePage` component( the parent
  of both `TemperatureInput` and `TemperatureDisplay`). This was the correct
  decision according to the 'lowest common ancestor'.

## When did you reach for Context and when did you reject it?

### Reach for Context:

- I used Context for the them because multiple unrelated component needed access
  to the current theme value

### Reject Context:

- I reject Context for the temperature feature because only a small number of
  closely related components needed the data.
