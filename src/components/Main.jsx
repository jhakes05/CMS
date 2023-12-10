import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const openCreateForm = (functionName) => {
        alert(`You clicked on "${functionName}" button. Implement your logic here.`);
        // Add your logic to open a create form or perform other actions.
    };

    return (
        <div>
            <header>
                <h1>Certification Management System</h1>
                <Link to ="/">Logout</Link>
            </header>

            <section className="dashboard-content">
                <div className="dashboard-section" id="manage-certifications">
                    <h2>Manage Certifications</h2>
                    {/* Your content for managing certifications goes here */}
                    <p>This is where you manage certifications.</p>
                    {/* Button for "Manage Certifications" */}
                    <button onClick={() => openCreateForm('Create Certification')}>Create Certification</button>
                </div>

                <div className="dashboard-section" id="view-certificates">
                    <h2>View Certificates</h2>
                    {/* Your content for viewing certificates goes here */}
                    <p>This is where you view certificates.</p>
                    {/* Button for "View Certificates" */}
                    <button onClick={() => openCreateForm('Create Certificate')}>Create Certificate</button>
                </div>

                <div className="dashboard-section" id="user-management">
                    <h2>User Management</h2>
                    {/* Your content for user management goes here */}
                    <p>This is where you manage users.</p>
                    {/* Button for "User Management" */}
                    <button onClick={() => openCreateForm('Create User')}>Create User</button>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
