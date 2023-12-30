import Link from "next/link";

const page =async () => {

    const res=await fetch('http://localhost:5000/posts',{
        // cache:"force-cache"
        // next:{
        //     revalidate: 5,
        // }
        cache:"no-store"
    });
    const posts=await res.json();

    //  console.log(posts)
    return (
        <div>
            <h3>Total post: {posts.length}</h3>
            <div className="space-y-3">
            {
               posts.map(post=><div key={post.id} className="card card-compact w-[70%] mx-auto bg-gray-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">{post.title}</h2>
                 <p>{post.description}</p>
                 <p>Likes:{post.likeCount}</p>
                 <div className="card-actions justify-end">
                   <Link href={`/posts/${post.id}`}>
                   <button className="btn btn-primary">See More...</button>
                   </Link>
                 </div>
               </div>
             </div>)
            }
            </div>
        </div>
    );
};

export default page;