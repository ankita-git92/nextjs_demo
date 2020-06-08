import { getPosts } from "../pages/api/posts";
import { index } from "./index";

IndexPage.getInitialProps = async () => {
    const posts = await getPosts();
    console.log("posts ia", posts)
    return { posts: posts }
}
const IndexPage = (props) => (
    < ul >
        {
            props.posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))
        }
    </ul >
);


// Import getSinglePost function
// import { getSinglePost } from '../api/posts';

// // PostPage page component
// const PostPage = (props) => {
//   // Render post title and content in the page from props
//   return (
//     <div>
//       <h1>{props.post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
//     </div>
//   )
// }

// // Pass the page slug over to the "getSinglePost" function
// // In turn passing it to the posts.read() to query the Ghost Content API
// PostPage.getInitialProps = async (params) => {
//   const post = await getSinglePost(params.query.slug);
//   return { post: post }
// };