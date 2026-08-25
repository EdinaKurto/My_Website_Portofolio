import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { BotanicalSprig } from "../components/Decor";
import { ArtworkCategory, ArtworkItem, artworks } from "../data/siteData";

const categories: ArtworkCategory[] = [
  "All",
  "Environment",
  "Illustration",
  "Concept Art",
  "Mixed Media",
];

export function Artwork() {
  const [category, setCategory] = useState<ArtworkCategory>("All");
  const [selected, setSelected] = useState<ArtworkItem | null>(null);

  const visible = useMemo(
    () =>
      category === "All"
        ? artworks
        : artworks.filter((item) => item.category === category),
    [category]
  );

  return (
    <div className="inner-page artwork-page">
      <section className="page-hero artwork-hero">
        <BotanicalSprig className="artwork-sprig" />

        <div className="container">
          <p className="handwritten section-hand">illustrations, sketches & visual experiments</p>
          <h1>Artwork</h1>
          <p className="page-intro">
            A growing collection of environments, characters, mixed media and
            visual ideas made across game projects and personal work.
          </p>

          <div className="filter-row">
            {categories.map((item) => (
              <button
                className={category === item ? "filter-chip is-active" : "filter-chip"}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-section page-content">
        <div className="container">
          <div className="artwork-grid">
            {visible.map((item, index) => (
              <button
                key={item.id}
                className={`artwork-tile artwork-tile--${(index % 8) + 1}`}
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.title} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.category} · {item.year}</small>
                </span>
              </button>
            ))}
          </div>

          <p className="handwritten artwork-ending">
            Beauty is in small things. Stories are in every place. ♡
          </p>
        </div>
      </section>

      {selected && (
        <div className="art-modal" role="dialog" aria-modal="true">
          <button className="art-modal__close" onClick={() => setSelected(null)}>
            <X size={20} />
          </button>
          <div className="art-modal__content">
            <img src={selected.image} alt={selected.title} />
            <div>
              <h2>{selected.title}</h2>
              <p>{selected.medium} · {selected.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
