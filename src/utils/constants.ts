// TODO: Use `${bigint}`?
export type Snowflake = string;

export const API_BASE_URL =
	process.env.NODE_ENV === "development" ? "http://localhost:3333" : "https://api.pepemanager.com";

export const BOT_API_BASE_URL =
	process.env.NODE_ENV === "development" ? "http://localhost:4444/bot" : "https://api.pepemanager.com/bot";

export const appleIcons: { href: string; media: string }[] = [
	{
		href: "/apple-splash-2048-2732.png",
		media:
			"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2732-2048.png",
		media:
			"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1668-2388.png",
		media:
			"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2388-1668.png",
		media:
			"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1536-2048.png",
		media:
			"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2048-1536.png",
		media:
			"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1668-2224.png",
		media:
			"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2224-1668.png",
		media:
			"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1620-2160.png",
		media:
			"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2160-1620.png",
		media:
			"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1284-2778.png",
		media:
			"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2778-1284.png",
		media:
			"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1170-2532.png",
		media:
			"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2532-1170.png",
		media:
			"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1125-2436.png",
		media:
			"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2436-1125.png",
		media:
			"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1242-2688.png",
		media:
			"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2688-1242.png",
		media:
			"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-828-1792.png",
		media:
			"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-1792-828.png",
		media:
			"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-1242-2208.png",
		media:
			"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-2208-1242.png",
		media:
			"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-750-1334.png",
		media:
			"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-1334-750.png",
		media:
			"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
	{
		href: "/apple-splash-640-1136.png",
		media:
			"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
	},
	{
		href: "/apple-splash-1136-640.png",
		media:
			"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
	},
];

export const keywords: string[] = [
	"Pepe",
	"Peepo",
	"Pepe Manager",
	"Pepe Manager Bot",
	"Pepe Manager Bot Discord",
	"Pepe Manager Discord",
	"Pepe Manager Discord Server",
	"Pepe Manager Discord Guild",
	"Emoji Manager",
	"Emoji Manager Discord",
	"Pepe Manager Invite",
	"Pepe Manager Bot Invite",
];

// https://discord.com/developers/docs/reference#snowflakes
export const MIN_SNOWFLAKE = 0b0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0010_0001_0000_0000_0001;

// 0b111111111111111111111111111111111111111111_11111_11111_111111111111 without _ which BigInt doesn't support
export const MAX_SNOWFLAKE = BigInt("0b1111111111111111111111111111111111111111111111111111111111111111");

export const DEFAULT_ROLE_COLOUR = "rgb(185, 187, 190)";

/**
 * Gets the XP required to achieve a level
 *
 * @remarks - un = 100 + 50 * (n - 1) ** 2
 * @returns The XP required
 */
export function getRequiredXp(level: number): number {
	return level === 0 ? 0 : 100 + 50 * (level - 1) ** 2;
}

export const DATABASE_LIMITS = {
	autoPublishChannels: { maxLength: 5 },
	autoRole: { maxLength: 5 },
	autoRoleTimeout: { max: 1_800_000, min: 60_000 },
	mentionCooldown: { max: 1_800_000, min: 300_000 },
	mentionCooldownRoles: { maxLength: 25 },
	milestonesInterval: { max: 100_000, min: 10 },
	milestonesMessage: { maxLength: 1_000 },
	milestonesRoles: { maxLength: 5 },
	noXpRoles: { maxLength: 30 },
	vanity: { maxLength: 32, minLength: 2 },
	xpChannels: { maxLength: 30 },
	xpDisallowedPrefixes: { maxLength: 10 },
	xpAnnounceLevels: { maxLength: 100 },
	xpAnnounceLevel: { max: 100, min: 1 },
	xpAnnounceMinimumLevel: { max: 500, min: 1 },
	xpAnnounceMultipleOf: { min: 1, max: 250 },
	xpMessage: { maxLength: 1_000 },
	xpMultiplierTargets: { maxLength: 30 },
	xpMultipliers: { maxLength: 10 },
	xpRoleRewards: { maxLength: 100 },
	xpRolesPerLevel: { maxLength: 5 },
};

export const DATABASE_PREMIUM_LIMITS = {
	autoPublishChannels: { maxLength: 25 },
	autoRole: { maxLength: 25 },
	autoRoleTimeout: { max: 1_800_000, min: 60_000 },
	mentionCooldown: { max: 1_800_000, min: 300_000 },
	mentionCooldownRoles: { maxLength: 25 },
	milestonesInterval: { max: 100_000, min: 10 },
	milestonesMessage: { maxLength: 1_000 },
	milestonesRoles: { maxLength: 10 },
	noXpRoles: { maxLength: 30 },
	vanity: { maxLength: 32, minLength: 2 },
	xpAnnounceLevels: { maxLength: 100 },
	xpAnnounceLevel: { max: 100, min: 1 },
	xpAnnounceMinimumLevel: { max: 500, min: 1 },
	xpAnnounceMultipleOf: { min: 1, max: 250 },
	xpChannels: { maxLength: 50 },
	xpDisallowedPrefixes: { maxLength: 25 },
	xpMessage: { maxLength: 1_000 },
	xpMultiplierTargets: { maxLength: 50 },
	xpMultipliers: { maxLength: 25 },
	xpRoleRewards: { maxLength: 100 },
	xpRolesPerLevel: { maxLength: 25 },
};

// Length is not being validated here as it's done separately
export const VANITY_REGEX = /^[\da-z]+$/i;

export { default as FALLBACK_AVATAR } from "~/assets/fallback-avatar.png";
