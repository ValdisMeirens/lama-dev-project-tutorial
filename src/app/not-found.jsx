import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry page do not exists</p>
      <Link href="/">Return To Homepage</Link>
    </div>
  );
};

export default NotFound;
