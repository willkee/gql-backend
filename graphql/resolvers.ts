const users = [
	{
		name: "Will Kee",
		title: "Software Engineer",
	},
	{
		name: "John Smith",
		title: "DevOps Engineer",
	},
	{
		name: "Jane Doe",
		title: "Pilot",
	},
	{
		name: "Harry Potter",
		title: "Mechanical Engineer",
	},
];

export const resolvers = {
	Query: {
		users: () => users,
	},
};
