export default (
  posts = [],
  filters = {
    text: '',
    sortBy: 'title',
  }
) => {
  if (filters.text.length === 0) {
    return posts;
  }

  return posts
    .filter((post) => {
      return post.title.includes(filters.text);
    })
    .sort((a, b) => {
      if (filters.sortBy === 'title') {
        return a.title > b.title;
      }
    });
};
