import React from "react";
export interface NavigationItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    description?: string;
}
export interface NavigationProps {
    items: NavigationItem[];
    activeItem: string;
    onItemClick: (itemId: string) => void;
    className?: string;
}
declare const Navigation: React.FC<NavigationProps>;
export default Navigation;
//# sourceMappingURL=Navigation.d.ts.map