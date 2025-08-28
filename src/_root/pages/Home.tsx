import { Models } from "appwrite";
import { Loader, PostCard } from "@/components/shared";

const Home = () => {
  const posts = []
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {false ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
          <ul className="grid 2xl:grid-cols-2 gap-6">
          </ul>
        }
      </div>
    </div>
  );
};

export default Home;
