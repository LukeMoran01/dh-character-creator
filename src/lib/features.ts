export interface Feature {
	name: string;
	feature: string;
}

export function formatFeature(feature: Feature | null): string {
	return feature ? feature.name + ": " + feature.feature : ""
}