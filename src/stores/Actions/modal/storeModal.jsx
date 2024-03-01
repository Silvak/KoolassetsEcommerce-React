export const storeModal = (set) => ({
  stateModal: false,
  contentModal: null,
  setModal: (open, content) => set({ stateModal: open, contentModal: content }),
});
