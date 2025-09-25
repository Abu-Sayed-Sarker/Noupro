'use client';

const ViewPlanModal = ({ plan, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              View Subscription Plan
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              View plan that have created
            </p>
          </div>
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

        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-900 font-medium">Plan Name :</span>
                  <span className="text-gray-600">{plan.packageName}</span>
                </div>

                <div className="py-3 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-gray-900 font-medium">
                      Description :
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-900 font-medium">Price:</span>
                  <span className="text-gray-600">${plan.price}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-900 font-medium">Interval:</span>
                  <span className="text-gray-600">{plan.interval}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPlanModal;
