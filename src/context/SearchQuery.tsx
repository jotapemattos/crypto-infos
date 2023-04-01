import { createContext, useState } from "react";

interface SearchQueryProps {
    search: string,
    setSearch: (s: string) => void
}

export const SearchQueryContext = createContext<SearchQueryProps>({
    search: '',
    setSearch: () => {},
})

export default function SearchQueryContextProvider ({children}: {children: React.ReactNode}) {
    const [search, setSearch] = useState('')

    return (
        <SearchQueryContext.Provider
            value={{
                search,
                setSearch,
            }}
        >
            {children}
        </SearchQueryContext.Provider>
    )
}