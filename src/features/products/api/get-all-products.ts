import { publicApiClient } from "@/lib/api-client";
import { queryOptions, useQuery } from "@tanstack/react-query";

type TReview = {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
};

type TDimensions = {
	width: number;
	height: number;
	depth: number;
};

export type TProduct = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: TDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: TReview[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: {
		createdAt: string;
		updatedAt: string;
		barcode: string;
		qrCode?: string;
	};
	thumbnail?: string;
	images: string[];
};

type TProductsResponse = {
	products: TProduct[];
	total: number;
	skip: number;
	limit: number;
};

export const getAllProducts = async ({
	limit = 10,
	skip = 0,
}): Promise<TProductsResponse> => {
	const response = await publicApiClient.get("/products", {
		params: { limit, skip },
	});
	return response.data as TProductsResponse;
};

export const getProductsQueryOptions = ({ limit = 10, skip = 0 }) => {
	return queryOptions({
		queryKey: ["products", { limit, skip }],
		queryFn: () => getAllProducts({ limit, skip }),
	});
};

export const useGetAllProducts = ({
	queryConfig = {},
	limit = 10,
	skip = 0,
} = {}) => {
	return useQuery({
		...getProductsQueryOptions({ limit, skip }),
		...queryConfig,
	});
};
