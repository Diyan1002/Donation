import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Helping Hands Program",
      desc: "How we are supporting underprivileged families across Pakistan.",
    },
    {
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Winter Relief Drive",
      desc: "Distributing blankets and food in cold affected areas.",
    },
    {
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
      title: "Education Support",
      desc: "Providing free education to deserving students.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      <h2 className="text-4xl font-bold text-center text-[#39206d] mb-10">
        Latest Blog & Activities
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-[#39206d] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BlogSection;