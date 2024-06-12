

const Faq = () => {
    return (
        <div>
           <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl text-center font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600"></p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I become an instructor on SkillTrack?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To become an instructor on SkillTrack, you need to first create an account as a student. After signing up, navigate to the Become an Instructor section and submit your request. Your profile will be reviewed by our team, and once approved, you can start creating and publishing your own classes. Ensure you fill out all required details, including your experience and the subject you want to teach.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What types of courses can I find on SkillTrack?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">SkillTrack offers a wide range of courses across various categories such as Web Development, App Development, Data Engineering, Cyber Security, and Digital Marketing. Each course is designed and taught by experienced instructors who are experts in their respective fields, providing you with high-quality learning content. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I enroll in a course?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To enroll in a course, first log in to your SkillTrack account. Browse through the available courses and select the one you are interested in. Click on the Enroll Now button and follow the payment process. Once the payment is confirmed, you will have access to all the course materials and resources. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What happens if my course request is rejected by the admin?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">If your course request is rejected by the admin, you will receive a notification explaining the reason for the rejection. You can review the feedback, make necessary adjustments, and resubmit your request. Our team is available to provide support and guidance to help you meet the criteria required for approval. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> How do I track my progress in a course?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can track your progress in a course through the My Courses section on your dashboard. Here, you’ll find a list of all the courses you are enrolled in, along with your completion status for each module. Additionally, instructors may provide quizzes and assignments to help you assess your understanding and progress throughout the course. </p>
			</details>
		</div>
	</div>
</section> 
        </div>
    );
};

export default Faq;