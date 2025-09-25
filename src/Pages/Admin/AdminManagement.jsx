'use client';

import { useState } from 'react';
import AdminTable from './AdminTable';
import AddAdminModal from './AddAdminModal';
import EditAdminModal from './EditAdminModal';
import ViewAdminModal from './ViewAdminModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Jack Boston',
      email: 'bockelboy@att.com',
      password: '328@B2xchsd',
      role: 'Super Admin',
      creationDate: 'Jan 15, 2024',
      picture:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Boston Smith',
      email: 'csilvers@verizon.com',
      password: 'password123',
      role: 'Admin',
      creationDate: 'Jan 15, 2024',
      picture:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Oliver Boston',
      email: 'qamaho@mail.com',
      password: 'admin456',
      role: 'Admin',
      creationDate: 'Jan 15, 2024',
      picture:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Ethan Johnson',
      email: 'qamaho@mail.com',
      password: 'ethan789',
      role: 'Admin',
      creationDate: 'Jan 15, 2024',
      picture:
        'https://images.unsplash.com/photo-1519244778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Perth Anderson',
      email: 'qamaho@mail.com',
      password: 'perth321',
      role: 'Admin',
      creationDate: 'Jan 15, 2024',
      picture:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Email');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const itemsPerPage = 8;

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAdmins = [...filteredAdmins].sort((a, b) => {
    if (sortBy === 'Email') return a.email.localeCompare(b.email);
    if (sortBy === 'Name') return a.name.localeCompare(b.name);
    if (sortBy === 'Role') return a.role.localeCompare(b.role);
    return 0;
  });

  const totalPages = Math.ceil(sortedAdmins.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAdmins = sortedAdmins.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleAddAdmin = (newAdmin) => {
    const admin = {
      ...newAdmin,
      id: Math.max(...admins.map((a) => a.id)) + 1,
      creationDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };
    setAdmins([...admins, admin]);
    setShowAddModal(false);
  };

  const handleEditAdmin = (updatedAdmin) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === updatedAdmin.id ? updatedAdmin : admin
      )
    );
    setShowEditModal(false);
    setSelectedAdmin(null);
  };

  const handleDeleteAdmin = (adminId) => {
    setAdmins(admins.filter((admin) => admin.id !== adminId));
    setShowDeleteModal(false);
    setSelectedAdmin(null);
  };

  const handleViewAdmin = (admin) => {
    setSelectedAdmin(admin);
    setShowViewModal(true);
  };

  const handleEditClick = (admin) => {
    setSelectedAdmin(admin);
    setShowEditModal(true);
  };

  const handleDeleteClick = (admin) => {
    setSelectedAdmin(admin);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Management
            </h1>
            <p className="text-gray-600">
              Control admin accounts and system privileges
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            + Add Admin
          </button>
        </div>

        {/* Search and Sort */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="Email">Sort by : Email</option>
              <option value="Name">Sort by : Name</option>
              <option value="Role">Sort by : Role</option>
            </select>
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Admin Table */}
        <AdminTable
          admins={currentAdmins}
          onView={handleViewAdmin}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          startIndex={startIndex}
        />

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-600">
            Showing data {startIndex + 1} to{' '}
            {Math.min(startIndex + itemsPerPage, sortedAdmins.length)} of{' '}
            {sortedAdmins.length} entries
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
            >
              &lt;
            </button>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 rounded ${
                    currentPage === pageNum
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && (
              <span className="px-3 py-2 text-gray-600">...</span>
            )}
            {totalPages > 5 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                {totalPages}
              </button>
            )}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddAdminModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddAdmin}
        />
      )}

      {showEditModal && selectedAdmin && (
        <EditAdminModal
          admin={selectedAdmin}
          onClose={() => {
            setShowEditModal(false);
            setSelectedAdmin(null);
          }}
          onSave={handleEditAdmin}
        />
      )}

      {showViewModal && selectedAdmin && (
        <ViewAdminModal
          admin={selectedAdmin}
          onClose={() => {
            setShowViewModal(false);
            setSelectedAdmin(null);
          }}
        />
      )}

      {showDeleteModal && selectedAdmin && (
        <DeleteConfirmModal
          item={selectedAdmin}
          type="admin"
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedAdmin(null);
          }}
          onConfirm={() => handleDeleteAdmin(selectedAdmin.id)}
        />
      )}
    </div>
  );
};

export default AdminManagement;
