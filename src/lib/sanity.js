// import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
// import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { error } from '@sveltejs/kit';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getContent() {
	return await client.fetch(
		groq`*[_type == "contents"] | order(_createdAt asc){
			sectionName,
			title,
			description,
			image,
			items
		  }`
	);
}

// export async function getPosts(): Promise<Post[]> {
// 	return await client.fetch(
// 		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
// 	);
// }

// export async function getPost(slug: string): Promise<Post> {
// 	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
// 		slug
// 	});
// }

// export async function getHero(): Promise<Hero> {
// 	return await client.fetch(
// 		groq`*[_type == "hero"][0]{title, bgImage, subtitle}`
// 	);
// }

// export async function getFeatures(): Promise<Features> {
// 	return await client.fetch(
// 		groq`*[_type == "feature"][0]{headerTitle, items}`
// 	);
// }

// export async function getMyFields(): Promise<MyFields> {
// 	return await client.fetch(
// 		groq`*[_type == "myfields"][0]{title, image, description}`
// 	);
// }

// export async function getAds(): Promise<Ads> {
// 	return await client.fetch(
// 		groq`*[_type == "ads"][0]{headerTitle, items}`
// 	);
// }

// export async function getOffers(): Promise<Offers> {
// 	return await client.fetch(
// 		groq`*[_type == "offers"][0]{headerTitle, headerSubtitle, items}`
// 	);
// }

// export async function getGallery(): Promise<Gallery> {
// 	return await client.fetch(
// 		groq`*[_type == "gallery"][0]{headerTitle, items}`
// 	);
// }

export async function submitOrder() {
	return await client.create({
		_type: 'orders',
		name: 'test',
		email: 'test',
		phone: 'test',
		message: 'test'
	}).then((res) => {
		console.log('res', res);
	}).catch((err) => {
		console.log('err', err);
	});
}

// export interface Post {
// 	_type: 'post';
// 	_createdAt: string;
// 	title?: string;
// 	slug: Slug;
// 	excerpt?: string;
// 	mainImage?: ImageAsset;
// 	body: PortableTextBlock[];
// }

// export interface Hero {
// 	_type: 'hero';
// 	title?: string;
// 	bgImage?: ImageAsset;
// 	subtitle?: string;
// }



// export interface Features {
// 	_type: 'feature';
// 	headerTitle?: string;
// 	items: Items[];
// }

// export interface MyFields {
// 	_type: 'myfields';
// 	title?: string;
// 	image?: ImageAsset;
// 	description?: string;
// }

// export interface Ads {
// 	_type: 'ads';
// 	headerTitle?: string;
// 	items: Items[];
// }

// export interface Offers {
// 	_type: 'offers';
// 	headerTitle?: string;
// 	headerSubtitle?: string;
// 	items: Items[];
// }

// export interface Gallery {
// 	_type: 'gallery';
// 	headerTitle?: string;
// 	headerSubtitle?: string;
// 	items: Items[];
// }

// export interface Orders {
// 	_type: 'orders';
// 	name?: string;
// 	email?: string;
// 	phone?: string;
// 	message?: string;
// }

// interface Items {
// 	_type: 'item';
// 	title?: string;
// 	description?: string;
// 	image?: ImageAsset;
// }

// export interface Contents {
// 	_type: string;
// 	sectionName: string;
// 	title: string;
// 	description: string;
// 	image: ImageAsset;
// 	items: Items[];
// }