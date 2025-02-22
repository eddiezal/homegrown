import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-accent p-4 text-black">
      <p className="text-sm">
        We use cookies to improve your experience. By using this site, you accept our cookie policy.
      </p>
      <button
        onClick={() => setVisible(false)}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
