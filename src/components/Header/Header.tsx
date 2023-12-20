import { Navigation } from "@/components/Header/Navigation/Navigation";

export const Header = () => (
    <header className="sm:flex sm:px-6 sm:sticky sm:top-0 sm:w-full sm:z-10">
        <div className="sm:flex sm:flex-col sm:max-w-page-container sm:mx-auto sm:w-full">
            <>
                <Navigation.Desktop />
                <Navigation.Mobile />
            </>
        </div>
    </header>
);