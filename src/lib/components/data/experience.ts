export interface Experience {
	title: string;
	description: string;
	company: string;
	timeRange: string;
	responsibilities: Array<string>;
	achievements: Array<string>;
	skills: Array<string>;
	imageUrl: string;
}


export const experienceList: Array<Experience> = [
	{
		title: "Senior Software Developer",
		company: "DataArt",
		timeRange: "Aug 2024 - Present · 11 mos",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/company-logos/dataart_logo.jpg",
		description: "Developing and maintaining a highly scalable investment platform for one of the largest investment providers in Britain. Specializing in solution architecture and software development, ensuring high availability, security, and performance for pension funds and personal investment solutions.",
		achievements: [
			"Successfully supported and optimized the largest investment platform in Britain, improving stability, performance, and scalability.",
			"Designed and implemented highly efficient microservices, reducing operational bottlenecks.",
			"Optimized cloud-based infrastructure, ensuring cost efficiency and reliability."
		],
		responsibilities:[
			"Designed and implemented microservices architecture to enhance system scalability and maintainability.",
			"Developed Java-based investment solutions using Spring Boot for high-performance financial applications.",
			"Built and optimized cloud-native applications on AWS, ensuring scalability and reliability.",
			"Engineered event-driven architectures with Corundum, streamlining investment operations.",
			"Integrated PostgreSQL databases for efficient data management and real-time processing.",
			"Collaborated with cross-functional teams to enhance platform security, compliance, and performance.",
			"Provided ongoing support for one of Britain's largest investment platforms, ensuring seamless operation."
		],
		skills: [
			"Solution Architecture",
			"Java",
			"Spring Framework",
			"AWS",
			"Microservices",
		]
	},
	{
		title: "Senior Software Developer",
		company: "Luxoft",
		timeRange: "Mar 2021 - Aug 2024 · 3 yrs 6 mos",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/company-logos/luxoft_logo.jpg",
		description: "Designed and developed a high-frequency trading platform for the banking sector, ensuring low-latency and high-throughput performance. Worked on complex, highly loaded systems requiring expertise in concurrency, distributed systems, and real-time data processing.",
		achievements: [
			"Successfully developed and maintained a highly loaded, low-latency trading system, handling millions of transactions per second.",
			"Optimized system performance, reducing latency and increasing throughput by leveraging concurrency best practices.",
			"Designed and implemented fault-tolerant solutions, ensuring high availability of critical trading operations."
		],
		responsibilities:[
			"Developed and optimized low-latency, high-performance trading applications using Java, Kafka, and Solace.",
			"Designed and implemented efficient event-driven architectures with ring buffer for fast message processing.",
			"Worked extensively with OracleDB and MongoDB, optimizing database performance for high-volume transactions.",
			"Built and deployed applications on OpenShift, ensuring scalability and reliability.",
			"Automated CI/CD pipelines with Jenkins, improving deployment efficiency.",
			"Applied concurrent programming techniques to enhance system performance and stability.",
			"Collaborated with architects and cross-functional teams to design scalable and resilient system architectures.",
			"Ensured system reliability and scalability by conducting performance tuning and load testing."
		],
		skills: [
			"Solution Architecture",
			"Java",
			"Kafka",
			"Solace",
			"Concurrency",
		]
	},
	{
		title: "Full-Stack Software Developer",
		company: "EPAM",
		timeRange: "Aug 2020 - Mar 2021 · 8 mos",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/company-logos/epam_systems_logo.jpg",
		description: "Developed and integrated business process automation solutions for the healthcare sector, ensuring efficiency, scalability, and reliability in hospital operations. Designed and implemented enterprise-grade integration systems, streamlining data flow across multiple healthcare providers.",
		achievements: [
			"Successfully built an integration system for hospitals, improving data exchange and workflow automation.",
			"Enhanced business process efficiency by implementing automated workflows, reducing manual intervention.",
			"Optimized real-time event processing using TIBCO Events, ensuring faster response times in hospital operations."
		],
		responsibilities:[
			"Developed and maintained Java-based applications for healthcare process automation.",
			"Configured and optimized TIBCO BPMS and TIBCO Events to support real-time business process execution.",
			"Designed and implemented messaging-based integration solutions to enable seamless communication between hospital systems.",
			"Developed scalable and fault-tolerant event-driven architectures using TIBCO Messaging.",
			"Collaborated with cross-functional teams to automate and optimize business workflows in healthcare operations.",
			"Ensured data consistency and system reliability, improving overall hospital operational efficiency.",
		],
		skills: [
			"Business Process Management Systems",
			"Business Event Management Systems",
			"Java"
		]
	},
	{
		title: "Full-Stack Developer",
		company: "SoftServe",
		timeRange: "Nov 2018 - Aug 2020 · 1 yr 10 mos",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/company-logos/softserve_logo.jpg",
		description: "Developed and modernized an exams platform for education, used by universities in Utah, ensuring scalability, performance, and reliability. Led the migration of a legacy system to AWS serverless architecture, improving efficiency and reducing operational costs.",
		achievements: [
			"Successfully migrated a legacy project to AWS Serverless architecture, significantly reducing infrastructure costs and increasing system resilience.",
			"Improved platform scalability and response times by implementing event-driven architectures.",
			"Enhanced database performance and data consistency, ensuring seamless exam processing for universities."
		],
		responsibilities:[
			"Developed and maintained Java-based applications for an online exams platform.",
			"Designed and implemented AWS Serverless solutions using Lambda, API Gateway, and DynamoDB/PostgreSQL.",
			"Refactored monolithic legacy systems into microservices, improving modularity and scalability.",
			"Integrated PostgreSQL and OracleDB to manage structured data efficiently.",
			"Optimized cloud infrastructure to ensure high availability and cost-effectiveness.",
			"Collaborated with educational institutions to enhance platform functionality and usability.",
		],
		skills: [
			"Java",
			"AWS",
			"Serverless"
		]
	},
	{
		title: "Software Developer",
		company: "InventorSoft",
		timeRange: "Mar 2017 - Dec 2018 · 1 yr 10 mos",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/company-logos/inventorsoft_co_logo.jpg",
		description: "Developed and maintained an accounting platform for the banking sector, ensuring seamless integration with financial systems. Worked on full-stack development using Java (Spring) and Angular, focusing on performance, security, and scalability.",
		achievements: [
			"Successfully integrated the platform with multiple banking and accounting systems, streamlining financial operations.",
			"Optimized system performance, reducing processing times for financial transactions.",
			"Enhanced platform security and reliability, ensuring compliance with financial regulations."
		],
		responsibilities:[
			"Designed and developed Java-based backend services using Spring Boot.",
			"Built and maintained Angular-based frontend applications, ensuring a smooth user experience.",
			"Integrated the platform with banking and accounting systems, enabling automated financial data processing.",
			"Ensured system security and compliance with banking industry standards.",
			"Provided ongoing support and enhancements, improving system performance and reliability."
		],
		skills: [
			"Java",
			"AWS",
			"Angular"
		]
	}
];