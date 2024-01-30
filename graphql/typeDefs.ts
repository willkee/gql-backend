import gql from "graphql-tag";

// typeDefs define the GraphQL schema being used.
// This is where you define the types and queries that are available to the client.

export const typeDefs = gql`
	type Company {
		id: ID!
		name: String
		ceo: String
		users: [User]
	}

	type User {
		id: ID!
		name: String
		title: String
		age: Int
		companyId: Int
		company: Company
	}

	type Query {
		users: [User]
		user(id: ID!): User
		companies: [Company]
	}

	type Mutation {
		addUser(name: String!, age: Int!, title: String, companyId: Int): User
		deleteUser(id: ID!): String
		editUser(
			id: ID!
			name: String
			age: Int
			title: String
			companyId: Int
		): User
	}
`;
