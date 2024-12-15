<h1 align="center">Library Management System</h1>

[![Watch the video](https://github.com/user-attachments/assets/5e03b25c-f837-4266-8b30-6fef47ffa0df)](https://github.com/user-attachments/assets/5e03b25c-f837-4266-8b30-6fef47ffa0df)

<h3>Project Overview:-</h3>
<p>Develop a Library Management System that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The application will be built using React for the front-end, Redux for state management, Axios for making HTTP requests, and JSON Server to simulate a RESTful backend API.</p>

<h2>Features:</h2>
<h3>1: Create Book:</h3>
<p>*&nbsp;&nbsp;Users can add new books to the library.</p>
<p>*&nbsp;&nbsp;Book details include title, author, genre, and publication year.</p>

<h3>2: Read Books:</h3>
<p>*&nbsp;&nbsp;Display a list of all books available in the library.</p>
<p>*&nbsp;&nbsp;Each book entry shows the title, author, genre, and publication year.</p>

<p>2&nbsp;&nbsp;Define State Structure:</p>
<p>&nbsp;&nbsp;&nbsp;Plan the global state to include:</p>
<ul>
  <li>A list of products.</li>
  <li>A loading indicator.</li>
  <li>An error message (if applicable).</li>
</ul>
<p>3&nbsp;&nbsp;Define Actions:</p>
<ul>
  <li>Write reducers to handle updates to the product list based on the defined actions.</li>
</ul>


<h3>Task 3:  Implement Components</h3>
<p>1&nbsp;&nbsp;Header Component:</p>
<ul>
  <li>&nbsp;&nbsp;Navigation links for accessing the product list and the add product page.</li>
</ul>
<p>2&nbsp;&nbsp;Product List Component:</p>
<ul>
  <li>Display a table or grid of products fetched from the Redux store.</li>
  <li>Include buttons for editing and deleting products.</li>
</ul>
<p>3&nbsp;&nbsp;Add Product Component:</p>
<p>&nbsp;&nbsp;&nbsp;A form to add new products with input fields for:</p>
<ul>
  <li>Name</li>
  <li>Catagory</li>
  <li>Price</li>
  <li>Stock Quantity</li>
  <li>Description</li>
</ul>
<p>4&nbsp;&nbsp;&nbsp;Edit Product Component:</p>
<ul>
  <li>A form pre-filled with the product's current data to allow editing.</li>
</ul>
<p>5&nbsp;&nbsp;&nbsp;Confirmation Modals (Optional):</p>
<ul>
  <li>Show a confirmation modal before deleting a product.</li>
</ul>

<h3>Task 4:  Routing Setup</h3>
<p>1&nbsp;&nbsp;Use React Router to manage navigation:</p>
<ul>
  <li>/:Displays the product list.</li>
  <li>/add: Displays the add product form</li>
  <li>/edit/:id: Displays the edit product form for a specific product.</li>
</ul>

<h3>Task 5: CRUD Operations Using Redux Thunk</h3>
<p>1&nbsp;&nbsp;Set custom loading:</p>
<ul>
  <li>Set the loader when viewing the records and submitting the form.</li>
</ul>
<p>2&nbsp;&nbsp;LocalStorage Integration:</p>
<ul>
  <li>Save product data to localStorage after every add, edit, or delete operation.</li>
  <li>Load product data from localStorage on app initialization.</li>
</ul>

<h3>Task 6: Styling</h3>
<p>1&nbsp;&nbsp;Set custom loading:</p>
<ul>
  <li>Create a simple, responsive UI using CSS frameworks like TailwindCSS, Bootstrap, or Material-UI.</li>
  <li>Ensure consistent styling for forms, tables, and buttons.</li>
</ul>

<h3>Task 7:  Testing</h3>
<p>1&nbsp;&nbsp;Test all CRUD functionalities:</p>
<ul>
  <li>Add new products.</li>
  <li>Edit existing products.</li>
  <li>Delete products.</li>
  <li>View the updated product list.</li>
</ul>
<p>2&nbsp;&nbsp;Ensure that data persists between page reloads using localStorage.</p>

<h3>Deliverables</h3>
<ul>
  <li>A functional React application with a product dashboard.</li>
  <li>CRUD operations handled via Redux and Redux Thunk.</li>
  <li>Data persistence using localStorage.</li>
  <li>Responsive and clean user interface.</li>
</ul>
