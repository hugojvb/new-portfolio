import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1 className="text-red-100">Hello Next.js 👋</h1>
		<p>
			<Link href="/about">
				<a className="absolute text-light line-through">About</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
