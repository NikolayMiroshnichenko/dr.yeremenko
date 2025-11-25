import { tabs } from "../../initData";
import Button from "@/components/buttons/Button";
import css from './Tabs.module.scss';

const Tabs = ({ activeTab, setActiveTab }) => {

    return (
        <div className={css.wrapper}>
            {tabs.map((item, idx) => (
                <div className={css.buttonWrapper} key={`button_tabs_${idx} `}>
                    <Button
                        onClick={() => setActiveTab(item)}
                        type={activeTab.id === item.id ? 'main' : 'secondary'}
                    >
                        {item.title}
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default Tabs;