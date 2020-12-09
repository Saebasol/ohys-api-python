module.exports = table => {
  table.increments()

  // NOTE: api specification;
  table.integer('animeId')

  // NOTE: metadata;
  table.float('number')
  table.string('filename', 2048)
  table.string('url', 4096)

  return table
}