
# Zuri Stage Two API


This is the documentation for the Zuri Stage Two API. It provides information on how to set up, run, and use the API for various CRUD operations.



## Prerequisites


Before you can run this API, make sure you have the following prerequisites installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is included with Node.js, so you don't need to install it separately.

## Getting Started


### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

### Running the API

Start the API server:

```bash
node index.js
```

The API will be running at `http://localhost:5000`

## API Endpoints

### GET `/api`

This endpoint retrieves a list of resources.

**Example Request:**

```bash
curl -X GET http://localhost:PORT/api
```
### GET `/api/{id}`

This endpoint retrieves a resource by its ID.

**Example Request:**

```bash
curl -X GET http://localhost:PORT/api
```

### POST `/api`

This endpoint creates a new resource.

**Example Request:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Resource Name"}' http://localhost:PORT/api
```

### PUT `/api/{id}`

This endpoint updates an existing resource by its ID.

**Example Request:**

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Resource Name"}' http://localhost:PORT/api/ID
```

### DELETE `/api/{id}`

This endpoint deletes a resource by its ID.

**Example Request:**

```bash
curl -X DELETE http://localhost:PORT/api/ID
```

## Usage

You can use a tool like [Postman](https://www.postman.com/) to test the API endpoints provided in this collection. Import the provided Postman collection to quickly get started.



