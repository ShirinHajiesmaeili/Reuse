const AccountPage = () => {
  return (
    <div
      className="account-container"
      style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}
    >
      <h2>
        Welcome, <strong>Shirin</strong>.
      </h2>

      <div className="sidebar">
        <button>Overview</button>
        <button>Orders</button>
        <button>Subscriptions</button>
        <button>Wishlist</button>
        <button>Rewards</button>
        <button>Support</button>
        <button>Profile</button>
        <button>Logout</button>
      </div>

      <div className="order-section">
        <h3>Your Last Order</h3>
        <p>You have not placed any orders.</p>
        <button>Start Shopping</button>
      </div>

      <div className="draft-orders">
        <h3>Draft Orders</h3>
        <p>You have no Draft Orders.</p>
      </div>

      <div className="profile-card">
        <p>
          <strong>Email:</strong> hajiesmaeliis@gmail.com
        </p>
        <p>
          <strong>Name:</strong> Shirin Hajiesmaeili
        </p>
        <p>
          <strong>Location:</strong> United States
        </p>
        <button>Update Profile</button>
        <button>Change my Password</button>
      </div>

      <button className="discount-btn">Get 15% OFF</button>
      <button className="live-chat-btn">Live Chat</button>
    </div>
  );
};

export default AccountPage;
