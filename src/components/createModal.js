/**
 * Creates a modal component that can be used to display podcast details.
 *
 * @returns {Object} An object containing the open and close functions for the modal.
 */
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
        titleEl.textContent = podcastData.title;
        imageEl.src = podcastData.image;
        imageEl.alt = podcastData.title;
        descEl.textContent = podcastData.description;
        genresEl.innerHTML = podcastData.genres.map((genre) => `<span class="tag">${genre}</span>`).join("");
        updatedEl.textContent = `Updated: ${new Date(podcastData.updated).toLocaleDateString()}`;
        seasonListEl.innerHTML = `<li>${podcastData.seasons} seasons</li>`;
        modal.classList.remove("hidden");
    };

    return {
        open: openModal,
        close: closeModal,
    };
})();