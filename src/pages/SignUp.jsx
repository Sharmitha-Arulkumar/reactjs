import React, { useState } from 'react';

const SignUp = () => {
    // Modes: 'signup', 'signin', 'authenticated'
    const [authMode, setAuthMode] = useState('signup');
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [currentUser, setCurrentUser] = useState(null);

    const validate = (mode) => {
        let localErrors = {};
        if (mode === 'signup' && !formData.name.trim()) {
            localErrors.name = 'Name is required';
        }

        if (!formData.email) {
            localErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            localErrors.email = 'Email structure is invalid';
        }

        if (!formData.password) {
            localErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            localErrors.password = 'Password must be at least 6 characters long';
        }
        return localErrors;
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(authMode);

        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            if (authMode === 'signup') {
                // Mock save user profile payload
                setCurrentUser({ name: formData.name, email: formData.email });
                alert('Account created successfully! Logging you in...');
            } else {
                // Mock lookup sign-in data fallback
                setCurrentUser({ name: formData.email.split('@')[0], email: formData.email });
                alert('Welcome back!');
            }
            setAuthMode('authenticated');
            setFormData({ name: '', email: '', password: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleSignOut = () => {
        setCurrentUser(null);
        setAuthMode('signup');
        alert('You have successfully signed out.');
    };
    // 1. Condition: User is logged in (Sign Out View)
    if (authMode === 'authenticated') {
        return (
            <div className="page-container auth-page">
                <div className="auth-card authenticated-view">
                    <h2>Account Profile</h2>
                    <div className="profile-badge">👤</div>
                    <p><strong>Hello, {currentUser?.name}!</strong></p>
                    <p className="profile-email">{currentUser?.email}</p>
                    <button className="auth-btn signout-btn" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }
    // 2. Condition: User is structuralizing entry credentials (Sign In / Sign Up Forms)
    return (
        <div className="page-container auth-page">
            <div className="auth-card">
                <div className="auth-toggle-headers">
                    <button
                        className={`toggle-tab ${authMode === 'signup' ? 'active' : ''}`}
                        onClick={() => { setAuthMode('signup'); setErrors({}); }}
                    >
                        Sign Up 
                    </button>
                    <button
                        className={`toggle-tab ${authMode === 'signin' ? 'active' : ''}`}
                        onClick={() => { setAuthMode('signin'); setErrors({}); }}
                    >
                    Sign In
                </button>
            </div>

            <form onSubmit={handleAuthSubmit} noValidate>
                {authMode === 'signup' && (
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>
                )}

                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                <button type="submit" className="auth-btn">
                    {authMode === 'signup' ? 'Create Account' : 'Log In'}
                </button>
            </form>
        </div>
    </div >
  );
};

export default SignUp;