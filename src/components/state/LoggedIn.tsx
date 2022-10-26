import { useState } from "react"


export const LoggedIn = () => {

	const [isLoggedIn , setIsLoggedIn] = useState(false)

	const handleLogin = () => {
		setIsLoggedIn(true)
	}
	const handleLogout = () => {
		setIsLoggedIn(0)
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn.length ? "logged in" : "logged out"}</div>
		</div>
	)
}
