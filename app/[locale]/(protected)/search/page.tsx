import { getLocalizedCards } from "@/app/hooks/useLocalizedCardsServer";
import SearchClient from "@/app/components/SearchClient";

type SearchProps = {

  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;

};

export default async function SearchPage({ searchParams }: SearchProps) {
    const resolvedParams = await searchParams;
    const query = (Array.isArray(resolvedParams.q) ? resolvedParams.q[0] : resolvedParams.q)?.toLowerCase() || "";
    const data = await getLocalizedCards()
    const searchResults = query 
    ? data.filter((item) => {
        const matchesId = item.front[0].cardNum === query;
        const matchesTitle = item.front[0]?.title?.toLowerCase().includes(query);
        
        return matchesId || matchesTitle;
      })
    : data;

    return <SearchClient initialResults={searchResults} query={query} />;
}