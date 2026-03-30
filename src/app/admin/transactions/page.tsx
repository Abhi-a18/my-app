import { transactions } from "@/app/lib/datat1";

export default function TransactionsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="grid gap-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <p><strong>ID:</strong> {tx.id}</p>
            <p><strong>User:</strong> {tx.user}</p>
            <p><strong>Amount:</strong> ₹{tx.amount}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  tx.status === "Completed"
                    ? "text-green-600"
                    : tx.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }
              >
                {tx.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}