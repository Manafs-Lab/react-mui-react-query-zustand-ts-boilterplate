import { publicApiClient } from "@/lib/api-client";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { TProduct } from "./get-all-products";

export const getProduct = async (productId: any): Promise<TProduct> => {
	const response = await publicApiClient.get(`/products/${productId}`);
	return response.data as TProduct;
};

export const getProductQueryOptions = (id: any) => {
	return queryOptions({
		queryKey: ["products", id],
		queryFn: () => getProduct(id),
	});
};

export const useGetProduct = (id: any, queryConfig = {}) => {
	return useQuery({
		...getProductQueryOptions(id),
		...queryConfig,
	});
};
