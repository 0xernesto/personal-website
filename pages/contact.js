// This page will display a form for people to contact me, along
// with social links (which should probably be included in the
// app's footer).
import { useState } from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import Link from "next/link";
import validator from "validator";

const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const validateEmail = (event) => {
		const emailInput = event.target.value;
		if (validator.isEmail(emailInput)) {
			setEmail(emailInput);
			setIsEmailValid(true);
		} else {
			setEmail(emailInput);
			setIsEmailValid(false);
		}
	};

	const onSubmit = async (event) => {
		// Prevent automatic form submission
		event.preventDefault();

		// Set state
		setLoading(true);
		setError("");

		// Send email via API request
		fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				subject,
				message,
			}),
		})
			.then((res) => {
				if (res.status == 200) {
					// Refresh state
					setFirstName("");
					setLastName("");
					setEmail("");
					document.getElementById("email").value = "";
					setIsEmailValid(false);
					setSubject("");
					setMessage("");

					// Success message
					setSuccessMessage("Your message was successfully sent.");
				}
			})
			.catch((err) => {
				setError(err.message);
				console.error(err);
			});

		setLoading(false);
	};

	//********** Instead of having the red "required" star by default, it may be best to only show
	//********** the star and/or validation error message after the user blurs out of input or attempts
	//********** to submit the form.

	return (
		<div className="flex flex-col items-center justify-start w-full h-screen">
			<h1 className="text-3xl font-bold">Contact Page</h1>
			<p>This is my contact page.</p>
			<form
				className="flex flex-col items-center justify-start"
				onSubmit={onSubmit}
			>
				<div className="flex items-center w-full">
					<label className="mt-2">First Name</label>
					<GiSevenPointedStar
						className="ml-2 text-red-600"
						size="6px"
					/>
				</div>
				<input
					className="px-2 py-1 text-white rounded outline-none bg-slate-800"
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First Name"
					value={firstName}
					onChange={(event) => setFirstName(event.target.value)}
					autoComplete="off"
					required
				/>
				<div className="flex items-center w-full">
					<label className="mt-2">Last Name</label>
					<GiSevenPointedStar
						className="ml-2 text-red-600"
						size="6px"
					/>
				</div>
				<input
					className="px-2 py-1 text-white rounded outline-none bg-slate-800"
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last Name"
					value={lastName}
					onChange={(event) => setLastName(event.target.value)}
					autoComplete="off"
					required
				/>
				<div className="flex items-center w-full">
					<label className="mt-2">Email</label>
					<GiSevenPointedStar
						className="ml-2 text-red-600"
						size="6px"
					/>
				</div>
				<input
					className="px-2 py-1 text-white rounded outline-none bg-slate-800"
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					onChange={(event) => validateEmail(event)}
					autoComplete="off"
					required
				/>
				<div className="flex items-center w-full">
					<label className="mt-2">Subject</label>
					<GiSevenPointedStar
						className="ml-2 text-red-600"
						size="6px"
					/>
				</div>
				<input
					className="px-2 py-1 text-white rounded outline-none bg-slate-800"
					type="text"
					id="subject"
					name="subject"
					placeholder="Subject"
					value={subject}
					onChange={(event) => setSubject(event.target.value)}
					autoComplete="off"
					required
				/>
				<div className="flex items-center w-full">
					<label className="mt-2">Message</label>
					<GiSevenPointedStar
						className="ml-2 text-red-600"
						size="6px"
					/>
				</div>
				<input
					className="px-2 py-1 text-white rounded outline-none bg-slate-800"
					type="text"
					id="message"
					name="message"
					placeholder="Message"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					autoComplete="off"
					required
				/>
				{successMessage ? (
					<div className="flex flex-col items-center justify-start">
						<h5>Success</h5>
						<span>{successMessage}</span>
						<Link href="/">
							<button className="p-2 mt-5 rounded bg-slate-900">
								Go to Home Page
							</button>
						</Link>
					</div>
				) : (
					<button
						className={
							!isEmailValid
								? "p-2 mt-5 rounded bg-slate-900 opacity-70 hover:cursor-not-allowed"
								: "p-2 mt-5 rounded bg-slate-900"
						}
						disabled={
							!firstName ||
							!lastName ||
							!email ||
							!isEmailValid ||
							!subject ||
							!message
								? true
								: false
						}
					>
						Submit
					</button>
				)}
			</form>
		</div>
	);
};

export default Contact;
