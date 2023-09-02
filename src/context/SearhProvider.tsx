import {SearchContext} from './SearchContext'

interface props{
    children: JSX.Element | JSX.Element[]
}
export const SearchProvider = ({children}):props => {
    return (
        <SearchContext.Provider  >
            { children }
        </SearchContext.Provider>

    )
}
