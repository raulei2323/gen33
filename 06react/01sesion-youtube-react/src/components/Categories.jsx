export default function Categories() {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Code",
    "Programing",
    "Life Style",
    "Sports",
  ];
  return (
    <div id="categories-list">
      {/* <span className="category">Cat 1</span> */}
      {categories.map((category) => {
        return (
            <span key={`category-${category}`} className="category">
                {category}
            </span>
        )
      })}
    </div>
  );
}
