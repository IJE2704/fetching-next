const page = async () => {
  // let data = await dataLoad();
  let data = await fetch("http://localhost:5000/posts",{
cache:"no-store"
  });
  data = await data.json();

  return (
    <div>
      <h1>We need more data</h1>
      <h1>Total posts- we need more : {data.length}</h1>
      <div className="w-[50%] mx-auto space-y-5">
      {data.map((post) => (
        <div key={post.id} className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>like : {post.like_count}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default page;
