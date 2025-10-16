"use client";

const SvgGlobal = ({ name, dataStyles = {} }) => {
    // let dynamicProperty;

    switch (name) {
        case 'menu-burger':
            // dynamicProperty = `${Math.floor(Math.random() * 1000)}`;

            return (
                <svg
                    {...dataStyles}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            )

        default:
            return null;
    }

};

export default SvgGlobal;