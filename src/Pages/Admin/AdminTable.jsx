'use client';

const AdminTable = ({ admins, onView, onEdit, onDelete, startIndex }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Admin Profile List
        </h2>
        <p className="text-gray-600">Manage all administrators in the system</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Serial
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Admin Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Creation date
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Role
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {admins.map((admin, index) => (
              <tr key={admin.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {String(startIndex + index + 1).padStart(2, '0')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={admin.picture || '/placeholder.svg'}
                      alt={admin.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {admin.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {admin.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {admin.creationDate}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      admin.role === 'Super Admin'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {admin.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onView(admin)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="View Admin"
                    >
                      <svg
                        className="w-4 h-4"
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
                      onClick={() => onEdit(admin)}
                      className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                      title="Edit Admin"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onDelete(admin)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete Admin"
                    >
                      <svg
                        className="w-4 h-4"
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

export default AdminTable;
