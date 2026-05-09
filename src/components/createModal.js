/**
 * Creates a modal component that can be used to display podcast details.
 *
 * @returns {Object} An object containing the open and close functions for the modal.
 */
export const createModal = (() => {
    /**
     * Creates a modal element and provides functions to open and close it.
     * @returns {Object} An object containing the open and close functions for the modal.
     */
    const modal = document.createElement("div");
    modal.className = "modal";

    const closeModal = () => {
        modal.style.display = "none";
    };

    const openModal = (podcastData) => {
        // Implementation for opening the modal with podcast data
        modal.style.display = "block";
    };

    return {
        open: openModal,
        close: closeModal
    };
})();