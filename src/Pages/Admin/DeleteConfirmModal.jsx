'use client';

const DeleteConfirmModal = ({ item, type, onClose, onConfirm }) => {
  const isAdmin = type === 'admin';
  const isSubscription = type === 'subscription';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Delete {isAdmin ? 'Admin' : 'Subscription Plan'}
              </h3>
              <p className="text-gray-600 text-sm">
                This action cannot be undone
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              Are you sure you want to delete{' '}
              <strong>{isAdmin ? item.name : item.packageName}</strong>?
              {isAdmin
                ? ' This will permanently remove their admin access and cannot be undone.'
                : ' This will permanently remove this subscription plan and cannot be undone.'}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete {isAdmin ? 'Admin' : 'Plan'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
