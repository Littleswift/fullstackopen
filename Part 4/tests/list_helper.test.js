const listHelper = require('../utils/list_helper')

const blogs = [{
  _id: '5a422a851b54a676234d17f7', title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7, __v: 0
}, {
  _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html', likes: 5, __v: 0
}, {
  _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0
}, {
  _id: '5a422b891b54a676234d17fa', title: 'First class tests', author: 'Robert C. Martin', url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll', likes: 10, __v: 0
}, {
  _id: '5a422ba71b54a676234d17fb', title: 'TDD harms architecture', author: 'Robert C. Martin', url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html', likes: 0, __v: 0
}, {
  _id: '5a422bc61b54a676234d17fc', title: 'Type wars', author: 'Robert C. Martin', url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html', likes: 2, __v: 0
}]

describe('Total likes', () => {
  test('of empty list equals zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })
  test('when list has only one blog equals likes of that', () => {
    expect(listHelper.totalLikes([blogs[0]])).toBe(blogs[0].likes)
  })
  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
})

describe('Favourite blog', () => {
  test('of empty list equals empty list message', () => {
    expect(listHelper.favouriteBlog([])).toEqual({
      title: 'Currently there are no blogs',
      author: '',
      likes: 0
    })
  })

  test('when list has only one blog equals likes of that', () => {
    expect(listHelper.favouriteBlog([blogs[0]])).toEqual({
      title: blogs[0].title,
      author: blogs[0].author,
      likes: blogs[0].likes
    })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.favouriteBlog(blogs)).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})

describe('Most blogs', () => {
  test('of empty list equals zero', () => {
    expect(listHelper.mostBlogs([])).toEqual(0)
  })

  test('when list has only one blog equals 1', () => {
    expect(listHelper.mostBlogs([blogs[0]])).toEqual({ author: blogs[0].author, blogs: 1 })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.mostBlogs(blogs)).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('Most likes', () => {
  test('of empty list equals zero', () => {
    expect(listHelper.mostLikes([])).toEqual(0)
  })

  test('when list has only one blog equals 1', () => {
    expect(listHelper.mostLikes([blogs[0]])).toEqual({
      author: blogs[0].author,
      likes: blogs[0].likes
    })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.mostLikes(blogs)).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})