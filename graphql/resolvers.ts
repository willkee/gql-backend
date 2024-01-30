import axios from "axios";

// resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves users from the "users" array above.

const url = "http://localhost:3000";

export const resolvers = {
	Query: {
		users: async () => {
			const res = await axios.get(`${url}/users`);
			console.log(res.data);
			return res.data;
		},
		user: async (_: any, { id }: any) => {
			const res = await axios.get(`${url}/users/${id}`);
			console.log(res.data);
			return res.data;
		},
		companies: async () => {
			const res = await axios.get(`${url}/companies`);
			console.log(res.data);
			return res.data;
		},
	},
	Mutation: {
		addUser: async (_: any, { name, title, age, companyId }: any) => {
			const res = await axios.post(`${url}/users`, {
				name,
				title,
				age,
				companyId,
			});

			return { ...res.data };
		},
		deleteUser: async (_: any, { id }: any) => {
			const _res = await axios.delete(`${url}/users/${id}`);
			if (_res.status === 200) return "User deleted successfully";
		},
		editUser: async (_: any, { id, name, title, age, companyId }: any) => {
			const body = { name, title, age, companyId };
			const res = await axios.patch(`${url}/users/${id}`, body);
			return { ...res.data };
		},
	},
	User: {
		company: async (user: any) => {
			const companyId = user.companyId;
			if (!companyId) return null;
			const res = await axios.get(`${url}/companies/${user.companyId}`);
			return res.data;
		},
	},
	Company: {
		users: async (company: any) => {
			const res = await axios.get(`${url}/users?companyId=${company.id}`);
			return res.data;
		},
	},
};
