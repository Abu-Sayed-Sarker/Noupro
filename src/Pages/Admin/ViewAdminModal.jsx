'use client';

const ViewAdminModal = ({ admin, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-start p-6 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              View Admin Profile
            </h2>
            <p className="text-gray-600 text-sm">
              View profile that have created
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={admin.picture || '/placeholder.svg'}
              alt={admin.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-900">
              Admin Name :
            </span>
            <span className="text-sm text-gray-600">{admin.name}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-900">Email :</span>
            <span className="text-sm text-gray-600">{admin.email}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-900">
              Password :
            </span>
            <span className="text-sm text-gray-600 font-mono">
              {'•'.repeat(admin.password.length)}
            </span>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-sm font-medium text-gray-900">Role :</span>
            <span
              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                admin.role === 'Super Admin'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {admin.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdminModal;
