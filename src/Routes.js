import Yelp from './util/Yelp';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

const Routes = () => {
    const searchYelp = (term, location, sortBy) => {
        Yelp.searchYelp(term, location, sortBy).then((businesses) => {
            this.setState({ businesses: businesses })
            setBusinesses(businesses)
        })
    }

    return (
        <div className='App'>
            <h1>routes</h1>
            <SearchBar searchYelp={searchYelp} />
            <BusinessList businesses={businesses} />
        </div>
    )
}

export default Routes;