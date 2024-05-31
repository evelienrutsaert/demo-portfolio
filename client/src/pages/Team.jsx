import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_TEAMS } from "../graphql/queries";

export default function Team() {
	const { loading, error, data } = useQuery(GET_ALL_TEAMS);
	if (loading) console.log(loading);
	if (error) console.log(error);
	if (data) console.log(data);

	return <div>Team</div>;
}
