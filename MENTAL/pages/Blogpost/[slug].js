// // Blogpost/[slug].js
// import React from 'react';
// import Link from 'next/link';

// const BlogPost = ({ title, slug }) => {
//   return (
//     <div className="blog-post">
//       <Link href={`/Blogpost/${slug}`}>
        
//           <h3>{title}</h3>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aut libero nesciunt iure cum! Repudiandae, expedita. Similique ullam voluptate adipisci voluptas consequuntur? Laboriosam, distinctio impedit facilis maxime laborum perferendis similique!
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aut libero nesciunt iure cum! Repudiandae, expedita. Similique ullam voluptate adipisci voluptas consequuntur? Laboriosam, distinctio impedit facilis maxime laborum perferendis similique!
//         {/* <h1>sohfdfhKJDFHADFHADUIHFIUHs {title}</h1> */}
//       </Link>
//       {/* Add more content as needed */}
//     </div>
//   );
// };

// export default BlogPost;



import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
      <>
      <main className={`${styles.main} }`}>
      <h1>Title of the Post</h1>
      <hr / >
    <div>This is the Post for the {slug}</div>
   </main>
    </>
  )
}

export default slug;



