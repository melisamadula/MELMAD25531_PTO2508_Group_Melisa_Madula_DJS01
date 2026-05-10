import { GenreService } from "../utils/GenreService.js";

/**
 * Creates a podcast card element based on the provided podcast data.
 *
 * @param {Object} podcastData - The podcast data object.
 * @param {Function} openModal - The function to open the modal.
 * @returns {HTMLElement} The created podcast card element.
 */
export const createPodcastCard = (podcastData, openModal) => {
    /**
     * Creates a podcast card element.
     * @param {Object} podcastData - The podcast data object.
     * @returns {HTMLElement} The created podcast card element.
     */
  const card = document.createElement("div");
  card.className = "podcast-card";
  card.innerHTML = `
    <img src="${podcastData.image}" alt="${podcastData.title}" class="podcast-card-image" />
    <div class="podcast-card-content">
      <h3>${podcastData.title}</h3>
      <p><img src="calendar.png" alt="Calendar" class="season-icon" /> ${podcastData.seasons} seasons</p>
      <p>${GenreService.getNames(podcastData.genres).join(", ")}</p>
      <p>Updated: ${new Date(podcastData.updated).toLocaleDateString()}</p>
    </div>
  `;
  card.addEventListener("click", () => openModal(podcastData));
  return card;
};