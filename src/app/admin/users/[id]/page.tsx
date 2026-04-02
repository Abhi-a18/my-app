// "use client";

// import { useParams } from "next/navigation";
// import { users } from "@/app/lib/data";

// export default function UserDashboard() {
//   const params = useParams();
//   const user = users.find((u) => u.id === params.id);

//   if (!user) return <div>User not found</div>;

//   return <h1>Welcome {user.name}</h1>;
// }