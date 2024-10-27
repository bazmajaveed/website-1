// import Button from "../components/button"
import Link from "next/link";

export default function Home() {
  const books = [
    {
      title: "Organic Chemistry",
      description: "Organic Chemistry Text Book in BSc Final",
      read:"/read-more",
      link: "/organic-chemistry",
    },
    {
      title: "Inorganic Chemistry",
      description: "Inorganic Chemistry Text Book in BSc Final",
      read:"/read-more",
      link: "/inorganic-chemistry"
    },
    {
      title: "Physics-III",
      description: "Physics-III Text Book in BSc Final",
      read:"/read-more",
      link: "/physics-3",
    },
    {
      title: "Physics-IV",
      description: "Physics-IV Text Book in BSc Final",
      read:"/read-more",
      link: "/physics-4"
    },
    {
      title: "Mechanics",
      description: "Mechanic Text Book in BSc Final",
      read:"/read-more",
      link: "/mechanic",
    },
    {
      title: "Calculus",
      description: "Calculus Text Book in BSc Final",
      read:"/read-more",
      link: "/calculus"
    },
    {
      title: "Pak. Studies",
      description: "Pak. Studies Text Book in BSc Final",
      read:"/read-more",
      link: "/pak-studies",
    },
    {
      title: "Urdu",
      description: "Urdu Text Book in BSc Final",
      read:"/read-more",
      link: "/urdu" ,
      image:"",
    }
  ];

  return (
    <div>
      {books.map((book, index) => (
        <div className="parent-container" key={index}>
          <Link href={book.link}>
          <div className="child-container">
            
            <div className="image">{book.image}
              
            </div>
            <h1 className="title">{book.title}</h1>
            <p className="description">{book.description}</p>

          <Link href={book.read}>
              <button className="read-more">Read More</button>
          </Link>
            
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
