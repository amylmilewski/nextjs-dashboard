import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }) {
    return (
    // The layout is structured using Flexbox to create a responsive layout. It consists of two main sections:


        // The layout adjusts based on the screen size (md:flex-row for large screens and md:flex-col for small screens).
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> 
        {/* The first section (div) contains the SideNav component, representing the sidebar navigation. */}
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            {/* The second section (div) contains the main content area, where the actual page content ({children}) will be rendered. */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}