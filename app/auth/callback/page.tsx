"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function OAuthCallback() {
	const router = useRouter();

	useEffect(() => {
		const handleAuth = async () => {
			try {
				const user = await account.get();
				console.log("Logged in user:", user);

				router.push("/"); // protected route
			} catch (err) {
				console.error("OAuth failed", err);
				router.push("/login");
			}
		};

		handleAuth();
	}, [router]);

	return <p>Signing you in...</p>;
}
