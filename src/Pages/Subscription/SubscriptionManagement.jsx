'use client';

import { useState } from 'react';
import SubscriptionTable from './SubscriptionTable.jsx';
import AddPlanModal from './AddPlanModal.jsx';
import EditPlanModal from './EditPlanModal.jsx';
import ViewPlanModal from './ViewPlanModal.jsx';
import DeleteConfirmModal from '../Admin/DeleteConfirmModal.jsx';

const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      packageId: '01',
      packageName: 'Starter (free)',
      packageAmount: '200$',
      type: 'Yearly',
      description:
        'A subscription plan is a payment model in which individuals or companies pay recurring fees at set intervals in exchange for access to goods or services. This model is commonly used for streaming services, digital storage, meal delivery kits, and personal care products.',
      price: 29.99,
      interval: 'Monthly',
      status: 'Active',
      intervalCount: 1,
      billingInterval: 'month',
    },
    {
      id: 2,
      packageId: '02',
      packageName: 'Growth Plan',
      packageAmount: '20.0$',
      type: 'Monthly',
      description:
        'Perfect for growing businesses that need more features and capabilities.',
      price: 20.0,
      interval: 'Monthly',
      status: 'Active',
      intervalCount: 1,
      billingInterval: 'month',
    },
    {
      id: 3,
      packageId: '03',
      packageName: 'Pro Plan',
      packageAmount: '00.0$',
      type: 'Free',
      description: 'Advanced features for professional users and enterprises.',
      price: 0.0,
      interval: 'Free',
      status: 'Active',
      intervalCount: 1,
      billingInterval: 'lifetime',
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleAddPlan = (planData) => {
    const newPlan = {
      id: subscriptions.length + 1,
      packageId: String(subscriptions.length + 1).padStart(2, '0'),
      packageName: planData.name,
      packageAmount: `${planData.amount}$`,
      type:
        planData.billingInterval === 'month'
          ? 'Monthly'
          : planData.billingInterval === 'year'
          ? 'Yearly'
          : 'Free',
      description: planData.description,
      price: Number.parseFloat(planData.amount),
      interval:
        planData.billingInterval === 'month'
          ? 'Monthly'
          : planData.billingInterval === 'year'
          ? 'Yearly'
          : 'Free',
      status: planData.status,
      intervalCount: Number.parseInt(planData.intervalCount),
      billingInterval: planData.billingInterval,
    };
    setSubscriptions([...subscriptions, newPlan]);
    setShowAddModal(false);
  };

  const handleEditPlan = (planData) => {
    const updatedSubscriptions = subscriptions.map((plan) =>
      plan.id === selectedPlan.id
        ? {
            ...plan,
            packageName: planData.name,
            packageAmount: `${planData.amount}$`,
            type:
              planData.billingInterval === 'month'
                ? 'Monthly'
                : planData.billingInterval === 'year'
                ? 'Yearly'
                : 'Free',
            description: planData.description,
            price: Number.parseFloat(planData.amount),
            interval:
              planData.billingInterval === 'month'
                ? 'Monthly'
                : planData.billingInterval === 'year'
                ? 'Yearly'
                : 'Free',
            status: planData.status,
            intervalCount: Number.parseInt(planData.intervalCount),
            billingInterval: planData.billingInterval,
          }
        : plan
    );
    setSubscriptions(updatedSubscriptions);
    setShowEditModal(false);
    setSelectedPlan(null);
  };

  const handleDeletePlan = () => {
    const updatedSubscriptions = subscriptions.filter(
      (plan) => plan.id !== selectedPlan.id
    );
    setSubscriptions(updatedSubscriptions);
    setShowDeleteModal(false);
    setSelectedPlan(null);
  };

  const handleViewPlan = (plan) => {
    setSelectedPlan(plan);
    setShowViewModal(true);
  };

  const handleEditClick = (plan) => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  const handleDeleteClick = (plan) => {
    setSelectedPlan(plan);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-end items-start mb-8">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            Add Plan
          </button>
        </div>

        {/* Subscription Table */}
        <SubscriptionTable
          subscriptions={subscriptions}
          onView={handleViewPlan}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />

        {/* Modals */}
        {showAddModal && (
          <AddPlanModal
            onClose={() => setShowAddModal(false)}
            onSave={handleAddPlan}
          />
        )}

        {showEditModal && selectedPlan && (
          <EditPlanModal
            plan={selectedPlan}
            onClose={() => {
              setShowEditModal(false);
              setSelectedPlan(null);
            }}
            onSave={handleEditPlan}
          />
        )}

        {showViewModal && selectedPlan && (
          <ViewPlanModal
            plan={selectedPlan}
            onClose={() => {
              setShowViewModal(false);
              setSelectedPlan(null);
            }}
          />
        )}

        {showDeleteModal && selectedPlan && (
          <DeleteConfirmModal
            item={{ ...selectedPlan, packageName: selectedPlan.name }}
            type="subscription"
            onClose={() => {
              setShowDeleteModal(false);
              setSelectedPlan(null);
            }}
            onConfirm={handleDeletePlan}
          />
        )}
      </div>
    </div>
  );
};

export default SubscriptionManagement;
