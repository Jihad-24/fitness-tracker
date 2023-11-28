import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 12;

    const fetchImages = useCallback(async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newImages = Array.from({ length: perPage }, (_, index) => ({
            id: (page - 1) * perPage + index + 1,
            url: `https://source.unsplash.com/random/400x400?sig=${(page - 1) * perPage + index}`,
        }));

        setIsLoading(false);
        setImages(prevImages => [...prevImages, ...newImages]);
    }, [page, perPage]);

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    }, [isLoading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (images.length < perPage) {
            fetchImages();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (page > 1) {
            fetchImages();
        }
    }, [page, fetchImages]);

    return (
        <div className="mx-5 md:mx-10 ">
            <Helmet>
                <title>Gallery || Fitness Tracker</title>
            </Helmet>
            <div className="h-52 w-full flex items-center justify-center border rounded"
                style={{
                    backgroundImage: 'url("https://i.ibb.co/fDmvkM6/360-F-606549277-BMzgu4-Qo-Nfq-HDkm-Ugng-Jr-FHux-ZXvk-S7d.jpg")',
                    backgroundSize: 'cover', // Set background size explicitly
                    opacity: 0.8,
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <h1 className="text-4xl font-bold text-white">Gallery</h1>
            </div>



            <div className="gallery my-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {(isLoading ? Array.from({ length: perPage }, (_, index) => (
                        <div key={index} className="grid-item">
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                    )) : images.slice(0, page * perPage).map(image => (
                        <div key={image.id} className="grid-item">
                            <img
                                src={image.url}
                                alt={`Image ${image.id}`}
                            />
                        </div>
                    )))}
                </div>
                {isLoading &&
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="flex flex-col  gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Gallery;
