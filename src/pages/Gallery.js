import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link z react-router-dom

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('.././images/', false, /\.(webp|png|jpe?g|svg)$/));

console.log('Images:', images);

const Gallery = () => {
    const [open, setOpen] = useState();

    return (
        <div>
            <section className="section" id="gallery">
                <h2>Gallery</h2>
                <p>
                    Welcome to my gallery! Here you can find a collection of my favorite photos.</p>
                <p>
                    Click on any image to view it in full size. I hope you enjoy browsing through my work! </p>
                <p>
                    If you like what you see, don't forget to check out my <Link to="/exclusivity" className="exclusivity-link">Exclusivity</Link> page for more!
                </p>
                <div className="gallery-container" id="gallery">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer"
                            onClick={() => setOpen(index)}
                        >
                            <img
                                src={image}
                                alt={`Valentina Love Pilot ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                    <Lightbox
                        open={open !== undefined}
                        close={() => setOpen(undefined)}
                        slides={images.map((image) => ({
                            src: image,
                        }))}
                        index={open}
                    />
                </div>
                <Link to="/exclusivity" className="btn">
                    Go to Exclusivity
                </Link>
            </section>
        </div>
    );
};

export default Gallery;