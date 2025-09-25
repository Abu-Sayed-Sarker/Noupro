'use client';

const SubscriptionTable = ({ subscriptions, onView, onEdit, onDelete }) => {
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'yearly':
        return 'text-red-600';
      case 'monthly':
        return 'text-red-600';
      case 'free':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-gray-700">
                Package ID
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">
                Package Name
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">
                Package Amount
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">
                Type
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription, index) => (
              <tr
                key={subscription.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-gray-900 font-medium">
                  {subscription.packageId}
                </td>
                <td className="py-4 px-6">
                  <div className="text-gray-900 font-medium">
                    {subscription.packageName}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">
                      {subscription.packageAmount}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`font-medium ${getTypeColor(subscription.type)}`}
                  >
                    {subscription.type}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onView(subscription)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title="View"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onEdit(subscription)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title="Edit"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onDelete(subscription)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;
