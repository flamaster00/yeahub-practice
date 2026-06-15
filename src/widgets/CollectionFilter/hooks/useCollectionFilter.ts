import { useSearchParams } from "react-router-dom";
import { type GetAllCollectionsParams } from "@entities/collection";

export const CollectionFilterQuery = {
  page: "page",
  limit: "limit",
  titleOrDescriptionSearch: "titleOrDescriptionSearch",
  specializations: "specializations",
  isFree: "isFree",
} as const;

export const useCollectionFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getCollectionFiltersQuery = () => {
    const pageQuery = searchParams.get(CollectionFilterQuery.page);
    const limitQuery = searchParams.get(CollectionFilterQuery.limit);
    const titleOrDescriptionSearchQuery = searchParams.get(
      CollectionFilterQuery.titleOrDescriptionSearch,
    );
    const specializationsQuery = searchParams.get(
      CollectionFilterQuery.specializations,
    );
    const isFreeQuery = searchParams.get(CollectionFilterQuery.isFree);

    let specs: number[] = [];
    if (specializationsQuery !== null && specializationsQuery !== undefined) {
      specs = specializationsQuery.split(",").map((el) => Number(el));
    }

    const params: GetAllCollectionsParams = {
      page: Number(pageQuery ?? "1"),
      limit: Number(limitQuery ?? "10"),
      titleOrDescriptionSearch: titleOrDescriptionSearchQuery ?? "",
      specializations: specs,
      isFree: isFreeQuery === 'false' ? false : true,
    };

    return params;
  };

  const setCollectionFiltersQuery = (filters: Partial<GetAllCollectionsParams>) => {
    const { isFree, limit, page, specializations, titleOrDescriptionSearch } =
      filters;

    setSearchParams((prev) => {
      if (page !== undefined)
        prev.set(CollectionFilterQuery.page, String(page));

      if (isFree !== undefined) {
        prev.set(CollectionFilterQuery.isFree, String(isFree));
      }

      if (limit !== undefined) {
        prev.set(CollectionFilterQuery.limit, String(limit));
      }

      if (specializations === undefined || specializations.length < 1) {
        prev.delete(CollectionFilterQuery.specializations);
      } else {
        prev.set(
          CollectionFilterQuery.specializations,
          specializations.toString(),
        );
      }

      if (
        titleOrDescriptionSearch === undefined ||
        titleOrDescriptionSearch == ""
      ) {
        prev.delete(CollectionFilterQuery.titleOrDescriptionSearch);
      } else {
        prev.set(
          CollectionFilterQuery.titleOrDescriptionSearch,
          titleOrDescriptionSearch,
        );
      }
      return prev;
    });
  };

  return {
    getCollectionFiltersQuery,
    setCollectionFiltersQuery,
  };
};
