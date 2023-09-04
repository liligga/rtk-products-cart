import {Link} from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio cillum dignissimos ducimus'
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  }
]

const PostsListPage = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className='text-2xl col-span-full'>Список постов</span>

      <div className="w-full flex justify-center items-center flex-wrap gap-4">
      { posts.map((post) => (
        <div key={post.id} className="w-full sm:w-3/4 md:w-[1000px] bg-slate-300 px-2 py-1 flex justify-center items-center rounded-md">
          <Link to={`/posts/${post.id}/edit`}>{post.title}</Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PostsListPage
