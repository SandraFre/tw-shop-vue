export default () => ({
  items: [],
  selectedItems: [],
  selectedItemCount: 0,
  searchQuery: 'Ivestas tekstas paieškoje',
  isLoading: false,
  filters: [],
  itemsPerPageOptions: [
    {
      count: 6,
      selected: true,
    },
    {
      count: 9,
      selected: false,
    },
    {
      count: 12,
      selected: false,
    },
    {
      count: 15,
      selected: false,
    }
  ],
  sortOptions: [
    {
      name: 'A-Z',
      selected: true,
      sortFunction: (a, b) => (a.name > b.name ? 1 : a.name == b.name ? 0 : -1)
    },
    {
      name: 'Z-A',
      selected: false,
      sortFunction: (a, b) => (a.name < b.name ? 1 : a.name == b.name ? 0 : -1)
    },
    {
      name: 'Pigiausi',
      selected: false,
      sortFunction: (a, b) => (a.price > b.price ? 1 : a.price == b.price ? 0 : -1)
    },
    {
      name: 'Brangiausi',
      selected: false,
      sortFunction: (a, b) => a.price < b.price ? 1 : a.price == b.price ? 0 : -1
    }
  ],
  pagination: {
    currentPage: 1,
    pages: []
  },
});
