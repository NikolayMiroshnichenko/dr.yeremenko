import css from './layout.module.scss';
import Header from "@/components/layouts/main/header/Header";
import Footer from "@/components/layouts/main/footer/Footer";

export default function MainLayout({ children }) {
    return (
        <div className={css.wrapper}>
            <Header />
            <div className={css.content}>
                {children}
            </div>
            <Footer />
        </div>
    );ÍÍ
}