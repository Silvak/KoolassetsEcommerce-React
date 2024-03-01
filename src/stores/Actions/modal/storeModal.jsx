export const storeModal = (set) => ({
  stateModal: true,
  contentModal: <div>Lorem ipsum dolor sit amet</div>,
  setModal: (open, content) => set({ stateModal: open, contentModal: content }),
});
