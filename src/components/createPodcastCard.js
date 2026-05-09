import { podcast } from "../data.js";

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
  card.addEventListener("click", () => openModal(podcastData));
  return card;
};