// React: Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// React: Create a Complex JSX Element
const JSX1 = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

// React: Add Comments in JSX
const JSX2 = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/**/}
  </div>
);

//   React: Render HTML Elements to the DOM
const JSX3 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

ReactDOM.render(JSX3, document.getElementById("challenge-node"));

//   React: Define an HTML Class in JSX
const JSX4 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

//   React: Learn About Self-Closing JSX Tags(like br and hr)
const JSX5 = (
  <div>
    // remove comment and change code below this line
    <h2>Welcome to React!</h2>
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
    // remove comment and change code above this line
  </div>
);

//   React: Create a Stateless Functional Component
const MyComponent1 = function () {
  // change code below this line
  return <div>{"Every Components return somethings"}</div>;
  // change code above this line
};

// React: Create a React Component

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
}

// React: Create a Component with Composition of other components

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* change code below this line */}
        <ChildComponent />

        {/* change code above this line */}
      </div>
    );
  }
}

//  React: Use React to Render Nested Components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* change code below this line */}
      <TypesOfFruit />
      {/* change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
      </div>
    );
  }
}

//   React: Compose React Components

class Fruits2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        {/* // nesting two components which is assumed to be in the background  */}
        <NonCitrus />
        <Citrus />
        {/* change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        {/* // nesting the other react component */}
        <Fruits2 />
        {/* change code above this line */}
        <Vegetables />
      </div>
    );
  }
}

//   React: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits2 />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
}

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

//   React: Write a React Component from Scratch

// change code below this line

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent3 />, document.getElementById("challenge-node"));

//   React: Pass Props to a Stateless Functional Component

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is: {props.date} </p>
      {/* Change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={Date()} />
        {/* Change code above this line */}
      </div>
    );
  }
}

// React: Pass an Array as Props

const List = (props) => {
  {
    /* Change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Change code above this line */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["buy food", "cook", "workout"]} />
        {/* Change code above this line */}
      </div>
    );
  }
}

// React: Use Default Props

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// change code below this line
// Assign Default Props to ShoppingCard Component
ShoppingCart.defaultProps = {
  items: 0,
};

// React: Override Default Props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* change code below this line */
    }
    // overriding the default props is same as explicitly setting up the props
    return <Items quantity={10} />;
    {
      /* change code above this line */
    }
  }
}

// React: Use PropTypes to Define the Props You Expect

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items.PropTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

// React: Access Props Using this.props

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name={"Jean"} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
      </div>
    );
  }
}

// React : Review Using Props with Stateless Functional Components

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Change code below this line
const Camper = (props) => {
  return <p>{props.name}</p>;
};
Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropTypes.string.isRequired };

// React : Create a Stateful Component

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Jean",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

// React : Render State in the User Interface
class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        {/* Change code below this line */}
        <h1>{name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

// React : Set State with this.setState

class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!",
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// React : Bind 'this' to a Class Method

class MyComponent6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

// React : Use State to Toggle an Element

// state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value. So, you should not use code like this:
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));

class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

// React : Write a Simple Counter

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
  reset() {
    this.setState((state) => ({ count: (state.count = 0) }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

// React : Create a Controlled Input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

// React : Create a Controlled Form

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

// React : Pass State as Props to Child Components

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        /* Change code below this line */
        <Navbar name={this.state.name} />
        /* Change code above this line */
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

// React : Pass a Callback as Props

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
