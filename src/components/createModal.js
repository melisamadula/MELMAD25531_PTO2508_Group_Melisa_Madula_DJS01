/**
 * Creates a modal component that can be used to display podcast details.
 *
 * @returns {Object} An object containing the open and close functions for the modal.
 */
import { GenreService } from "../utils/GenreService.js";
import { seasons } from "../data.js";

export const createModal = (() => {
    const modal = document.getElementById("modal");
    const titleEl = document.getElementById("modalTitle");
    const imageEl = document.getElementById("modalImage");
    const descEl = document.getElementById("modalDesc");
    const genresEl = document.getElementById("modalGenres");
    const updatedEl = document.getElementById("modalUpdated");
    const seasonListEl = document.getElementById("seasonList");

    const closeModal = () => {
        modal.classList.add("hidden");
    };

    const openModal = (podcastData) => {
        const matchedSeasonData = seasons.find((item) => item.id === podcastData.id);

        titleEl.textContent = podcastData.title;
        imageEl.src = podcastData.image;
        imageEl.alt = podcastData.title;
        descEl.textContent = podcastData.description;
        genresEl.innerHTML = GenreService.getNames(podcastData.genres)
            .map((genre) => `<span class="tag">${genre}</span>`)
            .join("");
        updatedEl.textContent = `Updated: ${new Date(podcastData.updated).toLocaleDateString()}`;

        if (matchedSeasonData && matchedSeasonData.seasonDetails) {
            seasonListEl.innerHTML = matchedSeasonData.seasonDetails
                .map(
                    (season) =>
                        `<li class="season-card">
                            <div class="season-info">
                                <h3>${season.title}</h3>
                                <p>${season.episodes} episodes</p>
                            </div>
                            <span class="episode-count">${season.episodes}</span>
                        </li>`
                )
                .join("");
        } else {
            seasonListEl.innerHTML = `<li class="season-card">
                                        <div class="season-info">
                                          <h3>${podcastData.seasons} seasons</h3>
                                        </div>
                                      </li>`;
        }

        modal.classList.remove("hidden");
    };

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    return {
        open: openModal,
        close: closeModal,
    };
})();