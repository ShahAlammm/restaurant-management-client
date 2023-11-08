const Blog = () => {
  return (
    <div className="container m-auto text-left space-y-8 mt-10">
      <header>
        <h1 className="text-3xl font-bold font-serif">Web Development Insights</h1>
      </header>

      <section className="blog-section">
        <h2 className="text-2xl font-bold mb-5">Understanding Oneway Databinding in Web Development</h2>
        <p>
          In web development, data binding is a powerful concept that connects
          the UI (User Interface) with the underlying data model. One-way
          databinding is a technique where changes in the model (or backend) are
          automatically reflected in the UI, but not the other way around. It
          ensures that when the data changes, the UI updates accordingly, but
          changes in the UI don't affect the data.
        </p>
      </section>

      <section className="blog-section">
        <h2 className="text-2xl font-bold mb-5">What is NPM in Node.js?</h2>
        <p>
          NPM, or Node Package Manager, is a package manager for JavaScript and
          Node.js environments. It simplifies the process of managing and
          distributing libraries, tools, and other dependencies in a Node.js
          project. Key functionalities of NPM include Dependency Management,
          Package Installation, Version Management, and Script Execution.
        </p>
      </section>

      <section className="blog-section">
        <h2 className="text-2xl font-bold mb-5">MongoDB vs MySQL: Choosing the Right Database</h2>
        <p>
          When deciding between MongoDB and MySQL, it's essential to consider
          the specific requirements of your project. MongoDB is a NoSQL,
          document-oriented database known for its flexibility and scalability.
          On the other hand, MySQL is a traditional relational database
          management system (RDBMS) with a predefined schema.
        </p>
        <p className="mt-5">
          MongoDB is suitable for applications with evolving and dynamic
          schemas, while MySQL is ideal for projects with stable and
          well-defined schemas. The choice between them depends on factors like
          data structure, scalability needs, and the development approach.
        </p>
      </section>

      <footer>
        <p>&copy; 2023 Web Development Insights</p>
      </footer>
    </div>
  );
};

export default Blog;
