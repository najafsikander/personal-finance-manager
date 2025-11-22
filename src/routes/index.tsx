import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

// TODO: MAKE BASIC HOME PAGE
// TODO: MAKE DASHBOARD PAGE. MUST INCLUDE: STATS CARDS, TRANSACTION TABLE, CARDS LIST, GRAPHS
// TODO: MAKE ADD EXPENSE PAGE. MUST INCLUDE: EXPENSE FORM, CATEGORY SELECTOR, AMOUNT INPUT, DATE PICKER
// TODO: MAKE TRANSACTIONS PAGE. MUST INCLUDE: TRANSACTION LIST, FILTERS, SEARCH
// TODO: MAKE TRANSACTION IMPORT PAGE. MUST INCLUDE: FILE UPLOAD, MAPPING FIELDS, PREVIEW DATA
// TODO: MAKE AUTH PAGES. MUST INCLUDE: LOGIN, REGISTER, FORGOT PASSWORD, RESET PASSWORD
// TODO: MAKE SETTINGS PAGE. MUST INCLUDE: PROFILE SETTINGS, SECURITY SETTINGS, NOTIFICATION SETTINGS
function App() {
  const navigate = useNavigate();
  return (
    <section className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-white">
        Welcome to the Expense Tracker App!
      </h1>
      <p className="text-white font-medium text-2xl mt-2">
        Analyze and manage your personal expenses effectively.
      </p>
      <button className="mt-6 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 cursor-pointer transition" onClick={() => navigate({to:'/dashboard'})}>
        Get Started
      </button>
    </section>
  );
}
