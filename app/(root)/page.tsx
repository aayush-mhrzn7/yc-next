import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      _id: 1,
      title: "How to build a startup",
      description: "This is a description of the post",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Tech",
      author: {
        name: "Aayush Maharjan",
        _id: 1,
      },
    },
  ];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your startup <br /> Connect with entreprenuers
        </h1>
        <p className="sub_heading text-white">
          Submit Ideas and get feedback from the community
        </p>
        <SearchForm query={query} />
      </section>
      <section className="container">
        <p className="font-semibld">
          {query ? "search results for " + query : "Latest Startup Ideas"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((item) => <StartupCard item={item} key={item._id} />)
          ) : (
            <p className="no-results">
              No results found for {query ? query : "latest startup ideas"}
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
