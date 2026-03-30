import { users } from "@/app/lib/data";

export default function UserDetail({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === params.id);

  if (!user) return <div>User not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Role: {user.role}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}