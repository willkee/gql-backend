# GraphQL vs RESTful Routing

## RESTful Routing

Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records.

### RESTful convention

```
/users - GET - Get all users
/users/:id - GET - Get a single user
/users - POST - Create a user
/users/:id - PUT - Update a user
/users/:id - DELETE - Delete a user
```

### Problems with RESTful routing

-   For a more complex application:
    -   For example, if we want to get a user's company name, we need to make a request to get the user, then another request to get the company.
    -   If we also need the user's position in the company, we need to make another request to get the position.
    -   We end up **over-fetching** if we are only looking for the user's company name and not the company's other attributes.
    -   We also end up **under-fetching** when we need to call multiple endpoints to get all the data we need.
    -   This is exacerbated with highly nested relational data.

These are issues that GraphQL aims to solve.

## GraphQL

-   GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Example:

```
query {
    user(id: "23") {
        users {
            firstName
            company {
                name
            }
            position {
                name
            }
        }
    }
}
```
