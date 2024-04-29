import { configLimitFeatures, extraFeatures, levelingFeatures } from "@/app/premium/features.ts";
import { PremiumPlan } from "@/app/premium/plan.tsx";
import { ComparisonTable } from "@/app/premium/table.tsx";
import logoImg from "@/assets/logo.png";
import lurkrFreeImg from "@/assets/premium-plans/lurkr-free.png";
import lurkrMaxImg from "@/assets/premium-plans/lurkr-max.png";
import lurkrUltimateImg from "@/assets/premium-plans/lurkr-ultimate.png";
import { ExternalLink } from "@/components/ExternalLink.tsx";
import { TOKEN_COOKIE } from "@/utils/constants.ts";
import { makeApiRequest } from "@/utils/make-api-request.ts";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Premium() {
	const token = cookies().get(TOKEN_COOKIE)?.value;
	const currentPlan = token ? await getData(token) : null;

	return (
		<div className="flex flex-col justify-center container mx-auto">
			<div className="flex flex-col items-center gap-4 xl:gap-0 mb-6">
				<div className="flex flex-col xl:flex-row gap-4 items-center">
					<p className="text-lg xl:text-2xl font-bold text-shadow-regular xl:whitespace-nowrap">
						Unlimited Leveling. Limited Investment.
					</p>
					<Image
						alt="Lurkr logo"
						className="hidden xl:block aspect-square size-72"
						height={288}
						width={288}
						priority
						src={logoImg}
					/>
					<p className="text-lg xl:text-2xl font-bold text-shadow-regular xl:whitespace-nowrap">
						Premium Status. Premium Support.
					</p>
				</div>

				<main className="flex flex-col w-full items-center">
					<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 xl:gap-16">
						<PremiumPlan
							name="Lurkr Max"
							img={lurkrMaxImg}
							price={1}
							perks={[
								"Personal Premium Lurkr for you!",
								"No tips on /level command for you",
								"Patreon role in Lurkr support server",
								"Premium support",
							]}
							funny="Buys you groceries…"
							buttonText="Turn it to Max!"
							tier={1}
							isCurrent={currentPlan?.plan === "Basic"}
						/>

						<PremiumPlan
							name="Lurkr Ultimate"
							img={lurkrUltimateImg}
							price={5}
							perks={[
								"Premium Lurkr for a whole server",
								"Huge increase in configuration limits",
								"Everything from Lurkr Max",
								"Patreon role in Lurkr support server",
								"Premium support",
								"Helps developers maintain Lurkr!",
							]}
							funny="Helps you pay taxes…"
							buttonText="Become Ultimate!"
							tier={2}
							isCurrent={currentPlan?.plan === "Guild"}
						/>

						<PremiumPlan
							name="Lurkr Free"
							img={lurkrFreeImg}
							price={0}
							perks={["Standard configuration limits"]}
							regular={["Tips on /level command", "No role in Lurkr support server", "Standard support"]}
							funny="Kisses you goodnight…"
							buttonText="Stay Free!"
							tier={0}
							isCurrent={currentPlan?.plan === "None"}
						/>
					</div>

					<p className="text-white/75 max-w-prose text-balance text-center">
						Purchases are subject to our <Link href="/terms">Terms & Conditions</Link> &{" "}
						<Link href="/privacy">Privacy Policy</Link> and to the{" "}
						<ExternalLink href="https://www.patreon.com/policy/legal">Terms of Service</ExternalLink> and{" "}
						<ExternalLink href="https://support.patreon.com/hc/articles/205032045-Patreon-s-refund-policy">
							Refund Policy
						</ExternalLink>{" "}
						of Patreon, Inc.
					</p>

					<h2 className="text-4xl font-bold mt-8">Compare Lurkr Plans</h2>

					<div className="mt-6 space-y-6">
						<ComparisonTable section="Leveling" features={levelingFeatures} />
						<ComparisonTable section="Configuration" features={configLimitFeatures} />
						<ComparisonTable section="Extras" features={extraFeatures} />
					</div>
				</main>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Premium Plans",
	description:
		"Get the most out of Lurkr with our premium plans. Compare the different plans and choose the one that fits your needs.",
};

async function getData(token: string) {
	const response = await makeApiRequest("/users/@me/premium", token, {
		next: {
			revalidate: 2 * 60, // 2 minutes
		},
	});

	if (!response.ok) {
		return null;
	}

	return response.json() as Promise<CurrentPlanResponse>;
}

interface CurrentPlanResponse {
	plan: "None" | "Basic" | "Guild";
}
