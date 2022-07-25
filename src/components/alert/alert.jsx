export const Alert = ({ alert }) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        id="liveToast"
        className={`toast ${alert.success && 'show'}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..." />
          <strong className="me-auto">Alert</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>

        <div className="toast-body">Wow, Successfully!</div>
      </div>
    </div>
  );
};
