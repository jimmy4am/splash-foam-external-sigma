# Common

Based on requirements to this test task new template for checkout portal was created. I assumed that no functionality
should be changed, and all changes we need is about layout and styling.
You mentioned that it would be good to stick as closely as possible to your current style and I did my best, but there
are some improvements I would like to propose.

Some of the existing components are quite big, hard to read and maintain. For example CheckoutForm component contains
almost 500 line, but it would be much better to create several new files (utils.ts, constants.ts, form.ts, types.ts etc.)
and move some code there.
Also, I figured out that we have a lot of code that could be moved to a separate component and not to duplicate code many
times:
- wrapper component for each section of checkout form
- each "card" in QuantitySelector component
- form control (text input, select etc.) that include control wrapper, label, control, errors...

In two word all reusable code better to keep as a separate component.
Also, some of the logic can be moved to custom hooks.
Each of these improvements allows to make code more readable, understandable, maintainable and expandable