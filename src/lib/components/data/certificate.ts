export interface Certificate {
	title: string;
	description: string;
	imageUrl: string;
	issuer: string;
	issuedDate: string;
	verificationLink: string;
	pdfUrl?: string;
	expirationDate?: string;
}


export const certificates: Array<Certificate> = [
	{
		title: "Solution Architecture",
		description: "Completed EPAM's 9-month Solution Architecture Master Program covering system design, architecture patterns, cloud-native solutions, DevOps integration, and real-world case studies aimed at developing enterprise-grade architectural skills.",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/webp/EMAM_SA_MASTER.webp",
		issuer: "EPAM",
		issuedDate: "Feb 2025",
		verificationLink: "https://certificates.epam.com/certificates/93f3e700-7420-40df-970f-08aa9cc7b13f",
		pdfUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/pdf/EMAM_SA_MASTER.pdf",
	},
	{
		title: "Solution Architecture Project Based Training",
		description: "Hands-on training focused on designing and implementing real-world architectures. Covered areas include event-driven systems, microservices, AWS deployment, cost-efficient design, and stakeholder communication.",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/webp/SA_ADAM_PAVLIK_M3_CERT.webp",
		issuer: "EPAM",
		issuedDate: "Feb 2025",
		verificationLink: "https://certificates.epam.com/certificates/93f3e700-7420-40df-970f-08aa9cc7b13f",
		pdfUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/pdf/SA_ADAM_PAVLIK_M3_CERT.pdf",
	},
	{
		title: "Solution Architecture 2.0",
		description: "Advanced module covering distributed systems, scalability strategies, cloud-native application patterns, and security best practices. Emphasis on AWS architecture and designing for failure.",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/webp/SA_ADAM_PAVLIK_M2_CERT.webp",
		issuer: "EPAM",
		issuedDate: "Nov 2024",
		verificationLink: "https://certificates.epam.com/certificates/d8bab16f-436e-4958-83a0-325aebf6086a",
		pdfUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/pdf/SA_ADAM_PAVLIK_M2_CERT.pdf",
	},
	{
		title: "Solution Architecture 1.0",
		description: "Core training in architectural principles including layered architectures, integration patterns, database design, and API gateways. Includes foundational knowledge for modern solution architects.",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/webp/SA_ADAM_PAVLIK_M1_CERT.webp",
		issuer: "EPAM",
		issuedDate: "Aug 2024",
		verificationLink: "https://certificates.epam.com/certificates/88f3c7df-f8d2-49a8-bf01-258d9fabdd83",
		pdfUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/pdf/SA_ADAM_PAVLIK_M1_CERT.pdf",
	},
	{
		title: "AWS Certified Developer - Associate",
		description: "Earned the AWS Certified Developer – Associate credential, validating skills in developing and maintaining AWS-based applications, including understanding core AWS services, best practices, and basic AWS architecture.",
		imageUrl: "https://adam-pavlik-assets.s3.eu-central-1.amazonaws.com/certificates/webp/AWS_D.webp",
		issuer: "AWS",
		issuedDate: "Sep 2019",
		verificationLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/MDHF7MW231B413C0",
		expirationDate: "Sep 2022",
	},

]