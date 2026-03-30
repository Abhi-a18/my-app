import Link from "next/link";
import { users } from "@/app/lib/data";

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Users</h1>

      {users.map((user) => (
        <Link key={user.id} href={`/admin/users/${user.id}`}>
          <div className="p-3 border mb-2 rounded cursor-pointer hover:bg-gray-100">
            {user.name} ({user.role})
          </div>
        </Link>
      ))}
    </div>
  );
}