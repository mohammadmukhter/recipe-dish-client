import React from "react";

const Blog = () => {
  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold text-center my-4">
        Some web development concepts
      </h2>
      <div className="space-y-3">
        <div className="bg-gray-100 text-black p-4 rounded">
          <span className="bg-gray-300 text-black font-medium text-xl underline">
            The differences between uncontrolled and controlled components:
          </span>{" "}
          <br></br>
          <span>
            {" "}
            A controlled component is a component that is controlled by React
            state,In React, Controlled Components are those in which form’s data
            is handled by the component’s state. It takes its current value
            through props and makes changes through callbacks like onClick,
            onChange, etc. while an uncontrolled component is a component that
            maintains its own internal state.Uncontrolled Components are the
            components that are not controlled by the React state and are
            handled by the DOM (Document Object Model).
          </span>
        </div>

        <div className="bg-gray-100 text-black p-4 rounded">
          <span className="bg-gray-300 text-black font-medium text-xl underline">
            How to validate React props using PropTypes?
          </span>{" "}
          <br></br>
          <span>
            {" "}
            PropTypes are simply a mechanism that ensures that the passed value
            is of the correct datatype. This makes sure that we don’t receive an
            error at the very end of our app by the console which might not be
            easy to deal with. we can install propTypes library for props
            validation.after installation we import propsTypes from
            prop-types,They are often used after the component ends and starts
            with the name of the component
          </span>
        </div>

        <div className="bg-gray-100 text-black p-4 rounded">
          <span className="bg-gray-300 text-black font-medium text-xl underline">
            The difference between nodejs and express js:
          </span>{" "}
          <br></br>
          <span>
            {" "}
            Node Js: An extension of JavaScript, NodeJS is an open-source
            server-side runtime environment built around the NodeJS language.
            Using a single-threaded approach for web loading and asynchronous
            programming. <br /> Express Js: ExpressJS is a framework for
            developing web applications with NodeJS.
          </span>
        </div>

        <div className="bg-gray-100 text-black p-4 rounded">
          <span className="bg-gray-300 text-black font-medium text-xl underline">
            What is a custom hook, and why will you create a custom hook?
          </span>{" "}
          <br></br>
          <span>
            {" "}
            Custom Hook is a JavaScript function which we create by ourselves,
            when we want to share logic between other JavaScript functions. It
            allows us to reuse some piece of code in several parts of our app.it
            can be reused easily, which makes the code cleaner and reduces the
            time to write the code.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
