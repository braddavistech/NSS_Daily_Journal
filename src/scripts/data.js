fetch("http://localhost:8088/entries")
    .then(entries => entries.json())
    .then(posts => {
      oldPosts(posts);
    })