import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from 'ngx-tour-ngx-bootstrap/step-option.interface';

export interface TSINgxbStepOption extends INgxbStepOption {
    containerClass?: string;
}

export interface TSINgxRoute {
    route: string;
}

export const appTourStartingRoute: TSINgxRoute = {
    route: "dash",
};

export const appTourSteps: TSINgxbStepOption[] = [
    // {
    //     anchorId: "start.tour",
    //     content: "Welcome to the Ngx-Tour tour!",
    //     placement: "right",
    //     title: "Welcome",
    // },
    // {
    //     anchorId: "angular-ui-tour",
    //     route: "docs",
    //     content: "Thanks to angular-ui-tour for the inspiration for the library",
    //     placement: "bottom",
    //     title: "angular-ui-tour",
    // },
    {
        anchorId: "usage",
        route: "docs",
        content: "Energy management is everything",
        placement: "bottom",
        title: "Empty your cup"
    },
    {
        anchorId: "usage",
        route: "docs",
        content: "Energy management is everything",
        placement: "left",
        title: "Empty your cup"
    },
    {
        anchorId: "dash.shipments",
        route: "dash",
        content: "We provide both ethical and unethical shipments globaally",
        title: "Route Return",
    },
    {
        anchorId: "docs.tourService",
        route: "docs",
        content: "controls the tour",
        placement: "auto",
        title: "notifications",
    },
    {
        anchorId: "pricing.title",
        route: "pricing",
        content: "Buy anything you like at extortionate prices (we are not here for you benefit)",
        placement: "auto",
        title: "Deals deals deals",
    },
    {
        anchorId: "pricing.containerClass",
        route: "pricing",
        content: "You can add custom container class.",
        title: "Custom CSS Class",
        containerClass: "custom-tour-class",
    },
    {
        anchorId: "another.route",
        content: "Like this!",
        route: "ngx-bootstrap/other",
        title: "Another Route",
    },
    {
        anchorId: "config.route",
        content: "And then back again.",
        placement: "bottom",
        title: "Route Return",
    },
    {
        anchorId: "config.placement.default",
        content:
            "Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",
        title: "No Placement",
    },
    {
        anchorId: "config.placement.default",
        content: "Sliiide to the left.",
        placement: "left",
        title: "Left Placement",
    },
    {
        anchorId: "config.placement.default",
        content: "Sliiide to the right.",
        placement: "right",
        title: "Right Placement",
    },
    {
        anchorId: "config.placement.default",
        content: "Take it back now y'all.  One hop this time.",
        placement: "bottom",
        title: "Bottom Placement",
    },
    {
        anchorId: "config.buttons.custom",
        content: "You can set custom step button names",
        title: "Button Titles",
        prevBtnTitle: "My Prev",
        nextBtnTitle: "My Next",
        endBtnTitle: "My End",
    },
    {
        anchorId: "hotkeys",
        content: "Try using the hotkeys to navigate through the tour.",
        title: "Hotkeys",
    },
    {
        anchorId: "events",
        content: "You can subscribe to events",
        title: "Events",
    },
];