// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Create a route to handle GET requests
app.get('/comments', (req, res) => {
  res.send('List of comments');
});

// Create a route to handle POST requests
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Create a route to handle PUT requests
app.put('/comments', (req, res) => {
  res.send('Update a comment');
});

// Create a route to handle DELETE requests
app.delete('/comments', (req, res) => {
  res.send('Delete a comment');
});
```

### 2.2. Query string
- Query string is used to pass data to the server using the URL. It is a set of key-value pairs, where each pair is separated by an ampersand (`&`).
- The query string starts with a question mark (`?`) and the key-value pairs are separated by an ampersand (`&`).
- The key and value are separated by an equal sign (`=`).
- Example: `http://localhost:3000/comments?postId=1&page=2`

```javascript
// Path: comments.js
app.get('/comments', (req, res) => {
  console.log(req.query); // { postId: '1', page: '2' }
  res.send('List of comments');
});
```

### 2.3. Route parameters
- Route parameters are used to pass data to the server using the URL. It is a way to extract data from the URL.
- Route parameters are defined by a colon (`:`) followed by the parameter name in the URL.
- Example: `http://localhost:3000/comments/1`

```javascript
// Path: comments.js
app.get('/comments/:id', (req, res) => {
  console.log(req.params); // { id: '1' }
  res.send('Get a comment');
});
```

### 2.4. Request body
- The request body is used to pass data to the server in the body of the request. It is used to send data to the server with a POST or PUT request.
- The request body is sent as a JSON object.
- To parse the