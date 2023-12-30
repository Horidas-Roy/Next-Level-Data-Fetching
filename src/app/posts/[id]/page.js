import Link from 'next/link';


export async function generateStaticParams() {


    const res=await fetch("http://localhost:5000/posts");
    const posts=await res.json();
    const ids=posts.map(post=>{
        return {
            id:post.id+""
        }
    })
    // console.log(ids)

    return ids
 }


const PostDetails = async({params}) => {
    // console.log(params.id)
    const res= await fetch(`http://localhost:5000/posts/${params.id}`);
    const post=await res.json();
    console.log(post)
    return (
        <div>
            <h2>Post Detail page</h2>
            <div>
            <div className="card card-compact w-[70%] mx-auto bg-gray-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">{post.title}</h2>
                 <p>{post.description}</p>
                 <p>Likes:{post.likeCount}</p>
                 <div className="card-actions justify-end">
                   <Link href={`/posts`}>
                   <button className="btn btn-accent">Back</button>
                   </Link>
                 </div>
               </div>
             </div>
            </div>
        </div>
    );
};

export default PostDetails;