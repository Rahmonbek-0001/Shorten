  let links = [
    {
      id: 1,
      title: "One post",
    },
    {
      id: 2,
      title: "Two post",
    },
    {
      id: 3,
      title: "Three post",
    },
  ];

// @desc Get all links
// @route GET api/links

export const getLink = (req, res) => {
  const limit = parseInt(req.query.limit)

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(links.sclise(0, limit))
  }
  res.status(200).json(links)
}

// @desc    Get single links
// @route   GET api/links:id

export const getLinks = (req, res, next) => {
  const id = parseInt(req.params.id)
  const link = links.find((link) => link.id === id)

  if (!link) {
    const error = new Error(`A link with the id of ${id} was not found`)
    error.status = 404
    return next(error)
  }
  res.status(200).json(link)
}

// @desc    Create new links
// @route   POST api/links

export const createLink = (req, res, next) => {
  console.log(req)
  const newLink = {
    id: links.length + 1,
    title: req.body.title
  }

  if (!newLink.title) {
    const error = new Error(`Plase include a title`)
    error.status = 400
    return next(error)
  }
  links.push(newLink)
  console.log(links)
  res.status(201).json(links)
}
// @desc    Update links
// @route   update api/links:id

export const updateLink = (req, res, next) => {
  const id = parseInt(req.params.id)
  const link = links.find((link) => link.id === id)

  if (!link) {
    const error = new Error(`A post with the id of ${id} was not found`)
    error.status = 404
    return next(error)
  }

  link.title = req.body.title
  res.status(200).json(links)
}

// @desc    Delete links
// @route   Delete api/links:id

export const deleteLink = (req, res, next) => {
  const id = parseInt(req.params.id)
  const link = links.find((link) => link.id === id)

  if (!link) {
    const error = new Error(`A post with the id of ${id} was not found`)
    error.status = 404
    return next(error)
  }

  links = links.filter((link) => link.id !== id)
  res.status(200).json(links)
}
