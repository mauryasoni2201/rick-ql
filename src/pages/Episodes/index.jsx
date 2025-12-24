import { useState, useEffect } from 'react';
import useEpisodes from '../../hooks/useEpisodes';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Pagination from '../../components/Pagination/Pagination';
import NoResults from '../../components/NoResults/NoResults';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import Skeleton from 'react-loading-skeleton';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

const initialPage = parseInt(process.env.REACT_APP_INITIAL_PAGE, 10) || 1;

const Episodes = () => {
    const [page, setPage] = useState(initialPage);
    const [searchInput, setSearchInput] = useState('');
    const [name, setName] = useState('');

    const { data, loading, error } = useEpisodes({ name, page });

    const resetFilters = () => {
        setPage(initialPage);
        setSearchInput('');
        setName('');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setName(searchInput.toLowerCase().trim());
            setPage(initialPage);
        }, process.env.REACT_APP_DEBOUNCE_DELAY || 1000);

        return () => clearTimeout(timer);
    }, [searchInput]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const episodes = data?.episodes?.results || [];
    const pages = data?.episodes?.info?.pages || 0;

    return (
        <SectionLayout
            headingClasses="text-center pb-10"
            heading="Ricky & Morty Episodes"
            description="Explore the episodes from the Ricky & Morty show"
            descriptionClasses="text-center pb-30"
        >
            <div className="filters-wrapper episodes">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search episode..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>

            <div className="episodes-listing">
                {loading &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="episodes-card-wrapper">
                            <Skeleton count={6} height={12} />
                        </div>
                    ))}

                {!loading &&
                    episodes.map((episode) => (
                        <EpisodeCard episode={episode} key={episode?.id} />
                    ))}

                {!loading && !error && episodes.length === 0 && <NoResults />}

                {error && (
                    <ErrorCard
                        title="Something went wrong! Please try again."
                        buttonOnClick={resetFilters}
                    />
                )}
            </div>

            {pages > 1 && (
                <div className="pagination-wrapper">
                    <Pagination
                        pageCount={pages}
                        onPageChange={handlePageClick}
                        forcePage={page - 1}
                    />
                </div>
            )}
        </SectionLayout>
    );
};
export default Episodes;
